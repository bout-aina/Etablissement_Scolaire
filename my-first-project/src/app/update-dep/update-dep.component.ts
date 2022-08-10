import { Component, OnInit } from '@angular/core';
import {Etudiant} from "../model/etudiant.model";
import {Observable} from "rxjs";
import {ProfsService} from "../services/profs.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EtudiantService} from "../services/etudiant.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Departement} from "../model/departement.model";
import {DepartementService} from "../services/departement.service";

@Component({
  selector: 'app-update-dep',
  templateUrl: './update-dep.component.html',
  styleUrls: ['./update-dep.component.css']
})
export class UpdateDepComponent implements OnInit {


  etd! : Departement ;

  profs!: Observable<ProfsService>;
  profId!: number;
  newProfFormGroup2! : FormGroup;
  constructor(private fb : FormBuilder,
              private departementService:DepartementService,
              private router:Router,
              private route : ActivatedRoute) {
    this.etd=this.router.getCurrentNavigation()?.extras.state as Departement;

  }

  ngOnInit(): void {
    this.profId = this.route.snapshot.params['id'];
    this.newProfFormGroup2=this.fb.group({
      nomdep : this.fb.control(null, [Validators.required]),
      chef : this.fb.control(null, [Validators.required]),
      description : this.fb.control(null, [Validators.required]),
    });

  }

  handleEditProf() {
    let prof:Departement=this.newProfFormGroup2.value;
    this.departementService.updateDep(this.profId,prof).subscribe()
        
      alert("Département has been successfully updated!");
        //this.newProfFormGroup2.reset();
        this.router.navigateByUrl("admin/home"); 
    
  }

}
