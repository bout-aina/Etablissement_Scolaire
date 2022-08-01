import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProfsService} from "../services/profs.service";
import {Router} from "@angular/router";
import {Profs} from "../model/prof.model";
import {EtudiantService} from "../services/etudiant.service";
import {Etudiant} from "../model/etudiant.model";

@Component({
  selector: 'app-new-etudiant',
  templateUrl: './new-etudiant.component.html',
  styleUrls: ['./new-etudiant.component.css']
})
export class NewEtudiantComponent implements OnInit {

  newProfFormGroup! : FormGroup;
  depList: any;
  SelectedValue! : string;
  changeProf(e : any){
    console.log(e.target.value)
    this.SelectedValue=e.target.value.toString();

  }
  constructor(private fb : FormBuilder, private profsService:EtudiantService,private fordeps:ProfsService, private router:Router) { }

  ngOnInit(): void {
    this.newProfFormGroup=this.fb.group({
      nom : this.fb.control(null, [Validators.required]),
      adresse : this.fb.control(null, [Validators.required]),
      telper : this.fb.control(null, [Validators.required]),
      telpar : this.fb.control(null, [Validators.required]),
      mail : this.fb.control(null, [Validators.required,Validators.email]),
      sex : this.fb.control(null, [Validators.required]),

      etat : this.fb.control(null, [Validators.required]),
      nom_departement : this.fb.control(null, [Validators.required]),
    });
    this.fordeps.getDeps().subscribe((data:any)=>{
      this.depList=data;
    })}

  handleSaveProf() {
    let profs:Etudiant=this.newProfFormGroup.value;
    this.profsService.saveEtd(profs).subscribe({
      next : data=>{
        alert("Etudiant has been successfully saved!");
        //this.newCustomerFormGroup.reset();
        this.router.navigateByUrl("admin/etudiants");
      },
      error : err => {
        console.log(err);
      }
    });
  }

  changeSex(e : any){
    console.log(e.target.value)
    this.SelectedValue=e.target.value.toString();

  }
  changeEtat(e : any){
    console.log(e.target.value)
    this.SelectedValue=e.target.value.toString();

  }
}
