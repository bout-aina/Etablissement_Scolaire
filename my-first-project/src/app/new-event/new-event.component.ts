import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EtudiantService} from "../services/etudiant.service";
import {ProfsService} from "../services/profs.service";
import {Event, Router} from "@angular/router";
import {Etudiant} from "../model/etudiant.model";
import {EventService} from "../services/event.service";

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  newEventFormGroup! : FormGroup;


  public currentDate=new Date();
  constructor(private fb : FormBuilder,private eventService:EventService, private router:Router) { }

  ngOnInit(): void {

    this.newEventFormGroup=this.fb.group({
      nom : this.fb.control(null, [Validators.required]),
      description : this.fb.control(null, [Validators.required,Validators.minLength(10)]),
      date : this.fb.control(null, [Validators.required]),
      heure : this.fb.control(null, [Validators.required]),
      lieu : this.fb.control(null, [Validators.required]),
    });
    console.log(this.currentDate);
  }

  handleSaveEvent() {
    let pr:any=this.newEventFormGroup.value;
    this.eventService.saveEvent(pr).subscribe({
      next : data=>{
        alert("Event has been successfully saved!");
        //this.newCustomerFormGroup.reset();
        this.router.navigateByUrl("admin/events");
      },
      error : err => {
        console.log(err);
      }
    });
  }


}
