import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ModuleService} from "../services/module.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Module} from "../model/module.model";

@Component({
  selector: 'app-update-module',
  templateUrl: './update-module.component.html',
  styleUrls: ['./update-module.component.css']
})
export class UpdateModuleComponent implements OnInit {
  profList: any;
  SelectedValue! : string;
  module! : Module ;
  changeProf(e : any){
    console.log(e.target.value)
    this.SelectedValue=e.target.value.toString();

  }
  modules!: Observable<Module>;
  moduleId!: number;
  newModuleFormGroup! : FormGroup;
  constructor(private fb : FormBuilder,
              private moduleService:ModuleService,
              private router:Router,
              private route : ActivatedRoute) {
    this.module=this.router.getCurrentNavigation()?.extras.state as Module;
  }

  ngOnInit(): void {
    this.moduleId = this.route.snapshot.params['id'];
    this.newModuleFormGroup=this.fb.group({
      nom : this.fb.control("{{this.module.nom}}",[Validators.minLength(3),Validators.required]),
      coeff : this.fb.control("{{this.module.coeff}}",[Validators.min(1),Validators.max(10),Validators.required]),
      taux_horraire : this.fb.control("{{this.module.taux_horraire}}",[Validators.min(1),Validators.max(50),Validators.required]),
      nomProf : this.fb.control("{{this.module.nomProf}}",[Validators.required]),


    });
    this.moduleService.getProfs().subscribe((data:any)=>{
      this.profList=data;
    })
  }
  handleEditModule() {
    let module:Module=this.newModuleFormGroup.value;
    this.moduleService.updateModule(this.moduleId,module).subscribe({
      next : data=>{
        alert("Module has been successfully updated!");
        //this.newModuleFormGroup.reset();
        this.router.navigateByUrl("admin/modules");
      },
      error : err => {
        console.log(err);
      }
    });

  }
}
