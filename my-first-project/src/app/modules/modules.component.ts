import { Component, OnInit } from '@angular/core';
import {catchError, map, Observable, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ModuleService} from "../services/module.service";
import {Module} from "../model/module.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";



@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {
  modules!:Observable<Array<Module>>;
  errorMessage!: string;
  searchformGroup: FormGroup = this.fb.group({
    keyword : this.fb.control("")
  });

  constructor(private moduleService: ModuleService,
              private fb : FormBuilder,
              private router : Router) {
  }
  totalLength : any;
  page :number =1;
  snapshot:any =[];
  ngOnInit(): void {
    this.searchformGroup=this.fb.group({
      keyword : this.fb.control("")
    });
    this.handleSearchModules();
    this.moduleService.getModules().subscribe((data:any)=>{
      this.totalLength = data.length;
      console.log(data.length)
    })
  }



  handleSearchModules() {
    let kw=this.searchformGroup?.value.keyword;
    this.modules=this.moduleService.searchModules(kw).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })

    );
  }
  handleDeleteModule(m: Module) {
    let conf = confirm("Are you sure?");
    if(!conf) return;
    this.moduleService.deleteModule(m.id).subscribe({
      next : (resp) => {
        this.modules=this.modules.pipe(
          map(data=>{
            // @ts-ignore
            let index=data.indexOf(m);
            // @ts-ignore
            data.slice(index,1)
            return data;
          })
        );
      },
      error : err => {
        console.log(err);
      }
    })
  }
  handleDetailmodule(module: Module) {
    this.router.navigateByUrl("admin/details-module/"+module.id,{state :module});
  }
  handleEditmodule(module: Module) {
    this.router.navigateByUrl("admin/updateModule/"+module.id,{state :module});
  }
  handleSavemodule() {
    this.router.navigateByUrl("admin/newModule",);
  }

}


