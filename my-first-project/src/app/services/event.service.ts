import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Profs} from "../model/prof.model";
import {environment} from "../../environments/environment";
import {Module} from "../model/module.model";
import {Etudiant} from "../model/etudiant.model";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  public  eventlist():Observable<Array<Event>>{
    return this.http.get<Array<Event>>(environment.backendHost+"/events")
  }

  public saveEvent(event: Event):Observable<Event>{

    return this.http.post<Event>(environment.backendHost+"/event",event);

  }
  public deleteEvent(id: number){
    return this.http.delete(environment.backendHost+"/event/"+id);
  }
  public updateEvent(id: number,etd : Event):Observable<Event>{

    return this.http.put<Event>(environment.backendHost+"/event/"+id,etd);
  }
}
