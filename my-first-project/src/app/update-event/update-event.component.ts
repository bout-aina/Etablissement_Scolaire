import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EventService} from "../services/event.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Etudiant} from "../model/etudiant.model";
import {Observable} from "rxjs";
import {ProfsService} from "../services/profs.service";
import {EtudiantService} from "../services/etudiant.service";

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

  event! : any ;
  public currentDate=new Date();
  profId!: number;
  newEventFormGroup2! : FormGroup;
  constructor(private fb : FormBuilder,
              private eventService:EventService,
              private router:Router,
              private route : ActivatedRoute) {
    this.event=this.router.getCurrentNavigation()?.extras.state as Event;

  }

  ngOnInit(): void {
    this.profId = this.route.snapshot.params['id'];
    console.log(this.event)
    this.newEventFormGroup2=this.fb.group({
      nom : this.fb.control(null, [Validators.required]),
      description : this.fb.control(null, [Validators.required,Validators.minLength(10)]),
      date : this.fb.control(null, [Validators.required]),
      heure : this.fb.control(null, [Validators.required]),
      lieu : this.fb.control(null, [Validators.required]),
    });
    console.log(this.profId)
  }

  handleEditEvent() {

    let event1:Event=this.newEventFormGroup2.value;
    console.log(event1)
    this.eventService.updateEvent(this.profId,event1).subscribe({
      next : data=>{
        alert("Event has been successfully updated!");
        //this.newModuleFormGroup.reset();
        this.router.navigateByUrl("admin/events");
      },
      error : err => {
        console.log(err);
      }
    });
  }


}
