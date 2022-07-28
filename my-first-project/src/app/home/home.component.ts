import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authService : AuthenticationService,
              private router : Router) { }

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
