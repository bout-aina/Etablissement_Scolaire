import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ModuleService} from "../services/module.service";
import {Router} from "@angular/router";
import {catchError, map, Observable, throwError} from "rxjs";
import {Etudiant} from "../model/etudiant.model";
import {EtudiantService} from "../services/etudiant.service";
import {Module} from "../model/module.model";

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {


 totalLenght : any;
 page : number =1;
  searchformGroup: FormGroup = this.fb.group({
    keyword : this.fb.control("")
  });

  errorMessage!: string;
  myetd!: Etudiant;
  snapshot:any =[];
  constructor(private etudiantService: EtudiantService,

              private fb : FormBuilder,
              private router : Router) { }

  ngOnInit(): void {
    this.handleSearchModules();

  }

  handleSaveetudiant() {
    this.router.navigateByUrl("admin/newEtudiant",);
  }


  handleDeleteModule(id : number , index : number ) {
    this.etudiantService.deleteEtd(id).subscribe(response =>{
      this.snapshot.splice(index, 1);
    });
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
  handleEditEtudiant(module: Etudiant) {
    this.router.navigateByUrl("admin/updateEtudiant/"+module.id,{state :module});
  }
  handleDetailetd(module: Etudiant) {

      this.router.navigateByUrl("admin/detailsetd/"+module.id,{state :module});

  }

  handlepdf(m: Etudiant) {
    this.router.navigateByUrl("admin/printetd/"+m.id,{state :m});
  }

  handleSearchModules() {
    let kw=this.searchformGroup?.value.keyword;
    this.etudiantService.searchModules(kw).subscribe((data)=>{
        this.snapshot = data;
        this.totalLenght = data.length;
        console.log(this.snapshot)
      }

    );
  }
}
