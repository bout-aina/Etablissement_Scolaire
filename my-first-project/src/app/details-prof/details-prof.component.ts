import { Component, OnInit } from '@angular/core';
import {Profs} from "../model/prof.model";
import {Router} from "@angular/router";
import {ProfsService} from "../services/profs.service";

@Component({
  selector: 'app-details-prof',
  templateUrl: './details-prof.component.html',
  styleUrls: ['./details-prof.component.css']
})
export class DetailsProfComponent implements OnInit {
  prof! : Profs ;
  modList!: any;

  constructor(private router:Router, private profsService:ProfsService) {
    this.prof=this.router.getCurrentNavigation()?.extras.state as Profs;
  }

  ngOnInit(): void {
    this.profsService.getModuleOfProf(this.prof.id).subscribe((data:any)=>{
      this.modList=data;
    })
  }

}
