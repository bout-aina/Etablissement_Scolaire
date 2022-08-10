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
  totalLenght : any;

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

    this.handleSearchModules();

  }



  handleSearchModules() {
    let kw=this.searchformGroup?.value.keyword;
    this.moduleService.searchModules(kw).subscribe((data)=>{
        this.snapshot = data;
        this.totalLenght = data.length;
        console.log(this.snapshot)
      }

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
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
  handleDetailmodule(module: Module) {
    this.router.navigateByUrl("admin/details-module/"+module.id,{state :module});
  }
  handleEditmodule(module: Module) {
    this.router.navigateByUrl("admin/updateModule/"+module.id,{state :module});
  }
  handleSavemodule() {
    this.router.navigateByUrl("admin/newModule");
  }

}


