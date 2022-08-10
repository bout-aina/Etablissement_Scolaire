import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

import {Router} from "@angular/router";
import {EventService} from "../services/event.service";
import {map} from "rxjs";

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
    this.handleSearchEvent();

  }
  handleSaveetudiant() {
    this.router.navigateByUrl("admin/newEvent",);
  }


  handleDeleteEvent(id : number , index : number ) {
    let conf = confirm("Are you sure?");
    if(!conf) return;
    this.eventService.deleteEvent(id).subscribe({
      next : (resp) => {
        this.snapshot=this.snapshot.pipe(
          map(data=>{
            // @ts-ignore
            let index=data.indexOf(m);
            // @ts-ignore
            data.slice(index,1)
            return data;
          })
        );
      },
      error : err => {
        console.log(err);
      }
    })
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
  handleSearchEvent() {
    let kw=this.searchformGroup?.value.keyword;
    this.eventService.searchEvent(kw).subscribe((data)=>{
        this.snapshot = data;
        this.totalLenght = data.length;
        console.log(this.snapshot)
      }

    );
  }
  handleEditEvent(event: Event,id:number) {
    this.router.navigateByUrl("admin/updateEvent/"+id,{state :event});
  }
}
