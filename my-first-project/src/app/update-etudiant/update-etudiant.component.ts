import { Component, OnInit } from '@angular/core';
import {Profs} from "../model/prof.model";
import {Observable} from "rxjs";
import {ProfsService} from "../services/profs.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Etudiant} from "../model/etudiant.model";
import {EtudiantService} from "../services/etudiant.service";

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {

  depList: any;
  SelectedValue! : string;
  etd! : Etudiant ;
  changeProf(e : any){
    console.log(e.target.value)
    this.SelectedValue=e.target.value.toString();

  }
  profs!: Observable<ProfsService>;
  profId!: number;
  newProfFormGroup2! : FormGroup;
  constructor(private fb : FormBuilder,
              private profsService:EtudiantService,
              private getdeps:ProfsService,
              private router:Router,
              private route : ActivatedRoute) {
    this.etd=this.router.getCurrentNavigation()?.extras.state as Etudiant;

  }

  ngOnInit(): void {
    this.profId = this.route.snapshot.params['id'];
    this.newProfFormGroup2=this.fb.group({
      nom : this.fb.control(null, [Validators.required]),
      adresse : this.fb.control(null, [Validators.required]),
      telper : this.fb.control(null, [Validators.required]),
      telpar : this.fb.control(null, [Validators.required]),
      mail : this.fb.control(null, [Validators.required,Validators.email]),
      sex : this.fb.control(null, [Validators.required]),

      etat : this.fb.control(null, [Validators.required]),
      nom_departement : this.fb.control(null, [Validators.required]),
    });
    this.getdeps.getDeps().subscribe((data:any)=>{
      this.depList=data;
    })
  }

  handleEditProf() {
    let prof:Etudiant=this.newProfFormGroup2.value;
    this.profsService.updateProf(this.profId,prof).subscribe({
      next : data=>{
        alert("Etudiant has been successfully updated!");
        //this.newModuleFormGroup.reset();
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


