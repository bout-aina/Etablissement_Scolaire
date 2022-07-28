import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.css']
})
export class AdminTemplateComponent implements OnInit {
  myScriptElement: HTMLScriptElement;
  constructor(public authService : AuthenticationService,
              private router : Router) {

    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "main/script.js";
    document.body.appendChild(this.myScriptElement);
  }

  ngOnInit(): void {
  }

  handleLogout() {
    this.authService.logout().subscribe({
      next :(data)=>{
        this.router.navigateByUrl("/login");
      }
    });
  }
}
