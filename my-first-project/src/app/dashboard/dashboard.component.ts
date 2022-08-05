import { Component, OnInit } from '@angular/core';
import {ModuleService} from "../services/module.service";
import {EtudiantService} from "../services/etudiant.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private etdService: EtudiantService,
              private  moduleService : ModuleService) { }
  lengthEtd : number = 0;
  lengthModule : number =0;
  ngOnInit(): void {
    this.etdService.etudiantlist().subscribe((data:any)=>{
      this.lengthEtd = data.length;
      //console.log(data.length)
    })
    this.moduleService.getModules().subscribe((data:any)=>{
      this.lengthModule = data.length;
      //console.log(data.length)
    })
  }



}
