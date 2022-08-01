import { Component, OnInit } from '@angular/core';
import {Profs} from "../model/prof.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfsService} from "../services/profs.service";
import {Etudiant} from "../model/etudiant.model";
import {Module} from "../model/module.model";
import {Observable} from "rxjs";
import {EtudiantService} from "../services/etudiant.service";

@Component({
  selector: 'app-details-etudiant',
  templateUrl: './details-etudiant.component.html',
  styleUrls: ['./details-etudiant.component.css']
})
export class DetailsEtudiantComponent implements OnInit {


  moduleId!: string;
  etd! : Etudiant ;
  constructor(private route : ActivatedRoute, private router :Router) {
    this.etd=this.router.getCurrentNavigation()?.extras.state as Etudiant;
  }

  ngOnInit(): void {
    this.moduleId = this.route.snapshot.params['id'];

  }

  printthis() {

  }
}
