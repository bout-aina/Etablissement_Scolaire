import { Component, OnInit } from '@angular/core';
import {Module} from "../model/module.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Departement} from "../model/departement.model";
import {ProfsService} from "../services/profs.service";
import {DepartementService} from "../services/departement.service";

@Component({
  selector: 'app-details-dep',
  templateUrl: './details-dep.component.html',
  styleUrls: ['./details-dep.component.css']
})
export class DetailsDepComponent implements OnInit {
  moduleId!: string;
  module! : Departement ;
  etds!:any;
  profs!:any;
  constructor(private route : ActivatedRoute, private router :Router, private departementService:DepartementService) {
    this.module=this.router.getCurrentNavigation()?.extras.state as Departement;
  }

  ngOnInit(): void {
    this.moduleId = this.route.snapshot.params['id'];
    this.departementService.getEtdOfDep(this.module.id).subscribe((data:any)=>{
      this.etds=data;
    })
    this.departementService.getProfOfDep(this.module.id).subscribe((data:any)=>{
      this.profs=data;
    })
  }

}
