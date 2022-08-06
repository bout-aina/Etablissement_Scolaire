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
import { EtudiantComponent } from './etudiant/etudiant.component';
import { NewEtudiantComponent } from './new-etudiant/new-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { DetailsEtudiantComponent } from './details-etudiant/details-etudiant.component';
import { PdfDetailsEtdComponent } from './pdf-details-etd/pdf-details-etd.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './events/events.component';
import { NewEventComponent } from './new-event/new-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { NgChartsModule } from 'ng2-charts';
import {NgApexchartsModule} from "ng-apexcharts";
import { DetailsDepComponent } from './details-dep/details-dep.component';
import { NewDepComponent } from './new-dep/new-dep.component';
import { UpdateDepComponent } from './update-dep/update-dep.component';


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
    UpdateProfComponent,
    EtudiantComponent,
    NewEtudiantComponent,
    UpdateEtudiantComponent,
    DetailsEtudiantComponent,
    PdfDetailsEtdComponent,
    DashboardComponent,
    EventsComponent,
    NewEventComponent,
    UpdateEventComponent,
    DetailsDepComponent,
    NewDepComponent,
    UpdateDepComponent,



  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        NgxPaginationModule,
        NgChartsModule,
        NgApexchartsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
