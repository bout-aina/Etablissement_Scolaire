import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { ModulesComponent } from './modules/modules.component';
import {HttpClientModule} from "@angular/common/http";
import { DetailsDeChaqueModuleComponent } from './details-de-chaque-module/details-de-chaque-module.component';
import { NewModuleComponent } from './new-module/new-module.component';
import { UpdateModuleComponent } from './update-module/update-module.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ProfsComponent } from './profs/profs.component';
import { DetailsProfComponent } from './details-prof/details-prof.component';
import { NewProfComponent } from './new-prof/new-prof.component';
import { UpdateProfComponent } from './update-prof/update-prof.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminTemplateComponent,
    ModulesComponent,
    DetailsDeChaqueModuleComponent,
    NewModuleComponent,
    UpdateModuleComponent,
    ProfsComponent,
    DetailsProfComponent,
    NewProfComponent,
    UpdateProfComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        NgxPaginationModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
