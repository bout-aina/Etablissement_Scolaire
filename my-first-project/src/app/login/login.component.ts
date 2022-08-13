import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userFormGroup! : FormGroup;
  errorMessage : any;
  myScriptElement: HTMLScriptElement;
  constructor(private  fb: FormBuilder,
              private authService : AuthenticationService,
              private  router : Router) {
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "assets/disable.js";
    document.body.appendChild(this.myScriptElement);
  }

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      username : this.fb.control(""),
      password : this.fb.control("")
    });
  }

  handelLogin() {
   let username = this.userFormGroup.value.username;
   let password = this.userFormGroup.value.password;
   this.authService.login(username,password).subscribe({
     next :(appUser)=>{
       this.authService.authenticateUser(appUser).subscribe({
         next : (data )=>{
            this.router.navigateByUrl("/admin/home");
         }
       });
     },
     error :(err)=>{
this.errorMessage=err;
     }
   })

  }
}
