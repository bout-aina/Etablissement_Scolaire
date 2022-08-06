import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EtudiantService} from "../services/etudiant.service";
import {ProfsService} from "../services/profs.service";
import {Router} from "@angular/router";
import {Etudiant} from "../model/etudiant.model";
import {DepartementService} from "../services/departement.service";
import {Departement} from "../model/departement.model";

@Component({
  selector: 'app-new-dep',
  templateUrl: './new-dep.component.html',
  styleUrls: ['./new-dep.component.css']
})
export class NewDepComponent implements OnInit {


  newProfFormGroup! : FormGroup;
  constructor(private fb : FormBuilder, private departementService:DepartementService, private router:Router) { }

  ngOnInit(): void {
    this.newProfFormGroup=this.fb.group({
      nomdep : this.fb.control(null, [Validators.required]),
      chef : this.fb.control(null, [Validators.required]),
      description : this.fb.control(null, [Validators.required]),
    });
  }

  handleSaveProf() {
    let profs:Departement=this.newProfFormGroup.value;
    this.departementService.saveEtd(profs).subscribe({
      next : data=>{
        alert("Departement has been successfully saved!");
        //this.newCustomerFormGroup.reset();
        this.router.navigateByUrl("admin/home");
      },
      error : err => {
        console.log(err);
      }
    });
  }

}
