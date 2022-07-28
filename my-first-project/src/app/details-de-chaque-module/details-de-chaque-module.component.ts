import { Component, OnInit } from '@angular/core';
import { Module } from '../model/module.model';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details-de-chaque-module',
  templateUrl: './details-de-chaque-module.component.html',
  styleUrls: ['./details-de-chaque-module.component.css']
})
export class DetailsDeChaqueModuleComponent implements OnInit {
  moduleId!: string;
  module! : Module ;
  constructor(private route : ActivatedRoute, private router :Router) {
    this.module=this.router.getCurrentNavigation()?.extras.state as Module;
  }

  ngOnInit(): void {
    this.moduleId = this.route.snapshot.params['id'];

  }

}
