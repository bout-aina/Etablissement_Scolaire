import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ModuleService} from "../services/module.service";
import {Router} from "@angular/router";
import { Module } from '../model/module.model';
import {catchError, Observable, throwError} from "rxjs";

import {Profs} from "../model/prof.model";


@Component({
  selector: 'app-new-module',
  templateUrl: './new-module.component.html',
  styleUrls: ['./new-module.component.css']
})
export class NewModuleComponent implements OnInit {
  profList: any;
  SelectedValue! : string;
  changeProf(e : any){
    console.log(e.target.value)
    this.SelectedValue=e.target.value.toString();

  }
  modules!: Observable<Module>;
  newModuleFormGroup! : FormGroup;
  constructor(private fb : FormBuilder,
              private moduleService:ModuleService,
              private router:Router) { }


  ngOnInit(): void {
    this.newModuleFormGroup=this.fb.group({
      nom : this.fb.control("", [Validators.required]),
      coeff : this.fb.control("",[Validators.required]),
      taux_horraire : this.fb.control("",[Validators.required]),
      nomProf : [""],


    });
    this.moduleService.getProfs().subscribe((data:any)=>{
    this.profList=data;
})
  }

  handleSaveModule() {
    let module:Module=this.newModuleFormGroup.value;
    this.moduleService.saveModule(module).subscribe({
      next : data=>{
        alert("Module has been successfully saved!");
        //this.newModuleFormGroup.reset();
        this.router.navigateByUrl("admin/modules");
      },
      error : err => {
        console.log(err);
      }
    });

  }


}
