import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProfsService} from "../services/profs.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Profs} from "../model/prof.model";

@Component({
  selector: 'app-update-prof',
  templateUrl: './update-prof.component.html',
  styleUrls: ['./update-prof.component.css']
})
export class UpdateProfComponent implements OnInit {
  depList: any;
  SelectedValue! : string;
  prof! : Profs ;
  changeProf(e : any){
    console.log(e.target.value)
    this.SelectedValue=e.target.value.toString();

  }
  profs!: Observable<ProfsService>;
  profId!: number;
  newProfFormGroup2! : FormGroup;
  constructor(private fb : FormBuilder,
              private profsService:ProfsService,
              private router:Router,
              private route : ActivatedRoute) {
    this.prof=this.router.getCurrentNavigation()?.extras.state as Profs;

  }

  ngOnInit(): void {
    this.profId = this.route.snapshot.params['id'];
    this.newProfFormGroup2=this.fb.group({
      nom_complet : this.fb.control(null, [Validators.required]),
      mail : this.fb.control(null, [Validators.required,Validators.email]),
      tel : this.fb.control(null, [Validators.required]),
      adresse : this.fb.control(null, [Validators.required]),
      nom_departement : this.fb.control(null, [Validators.required]),
    });
    this.profsService.getDeps().subscribe((data:any)=>{
      this.depList=data;
    })
  }

  handleEditProf() {
    let prof:Profs=this.newProfFormGroup2.value;
    this.profsService.updateProf(this.profId,prof).subscribe({
      next : data=>{
        alert("Prof has been successfully updated!");
        //this.newModuleFormGroup.reset();
        this.router.navigateByUrl("admin/profs");
      },
      error : err => {
        console.log(err);
      }
    });
  }
}
