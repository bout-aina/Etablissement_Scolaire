import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProfsService} from "../services/profs.service";
import {Router} from "@angular/router";
import {Profs} from "../model/prof.model";

@Component({
  selector: 'app-new-prof',
  templateUrl: './new-prof.component.html',
  styleUrls: ['./new-prof.component.css']
})
export class NewProfComponent implements OnInit {
  newProfFormGroup! : FormGroup;
  depList: any;
  SelectedValue! : string;
  changeProf(e : any){
    console.log(e.target.value)
    this.SelectedValue=e.target.value.toString();

  }
  constructor(private fb : FormBuilder, private profsService:ProfsService, private router:Router) { }

  ngOnInit(): void {
    this.newProfFormGroup=this.fb.group({
      nom_complet : this.fb.control(null, [Validators.required]),
      mail : this.fb.control(null, [Validators.required,Validators.email]),
      tel : this.fb.control(null, [Validators.required]),
      adresse : this.fb.control(null, [Validators.required]),
      nom_departement : this.fb.control(null, [Validators.required]),
    });
    this.profsService.getDeps().subscribe((data:any)=>{
      this.depList=data;
    })}

  handleSaveProf() {
    let profs:Profs=this.newProfFormGroup.value;
    this.profsService.saveProf(profs).subscribe({
      next : data=>{
        alert("prof has been successfully saved!");
        //this.newCustomerFormGroup.reset();
        this.router.navigateByUrl("admin/profs");
      },
      error : err => {
        console.log(err);
      }
    });
  }
}
