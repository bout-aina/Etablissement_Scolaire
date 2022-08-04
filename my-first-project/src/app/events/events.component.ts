import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

import {Router} from "@angular/router";
import {EventService} from "../services/event.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  totalLenght : any;
  page : number =1;
  searchformGroup: FormGroup = this.fb.group({
    keyword : this.fb.control("")
  });

  errorMessage!: string;
  snapshot:any =[];
  constructor(private eventService: EventService,
              private fb : FormBuilder,
              private router : Router) { }

  ngOnInit(): void {
    this.eventService.eventlist().subscribe((data)=>{
      this.snapshot = data;
      this.totalLenght = data.length;
      console.log(this.snapshot)
    })


  }
  handleSaveetudiant() {
    this.router.navigateByUrl("admin/newEvent",);
  }


  handleDeleteEvent(id : number , index : number ) {
    this.eventService.deleteEvent(id).subscribe(response =>{
      this.snapshot.splice(index, 1);
    });
  }
  handleEditEvent(event: Event,id:number) {
    this.router.navigateByUrl("admin/updateEvent/"+id,{state :event});
  }
}
