import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Profs} from "../model/prof.model";
import {environment} from "../../environments/environment";
import {deps} from "../model/dep.model";

@Injectable({
  providedIn: 'root'
})
export class ProfsService {

  constructor(private http:HttpClient) { }

  public getProfs():Observable<Array<Profs>>{
    return this.http.get<Array<Profs>>(environment.backendHost+"/profs")
  }
  public searchProfs(keyword : string):Observable<Array<Profs>>{
    return this.http.get<Array<Profs>>(environment.backendHost+"/profs/search?keyword="+keyword)
  }
  public nbrProfPourChaqueDep():Observable<Array<Number>>{
    return this.http.get<Array<Number>>(environment.backendHost+"/profsNbr")
  }
  public saveProf(profs: Profs):Observable<Profs>{
    return this.http.post<Profs>(environment.backendHost+"/profs",profs);
  }
  public  getDeps():Observable<Array<deps>>{
    return this.http.get<Array<deps>>(environment.backendHost+"/departementnames")
  }
  public deleteProf(id: number){
    return this.http.delete(environment.backendHost+"/profs/"+id);
  }
  public updateProf(id: number,profs : Profs):Observable<Profs>{

    return this.http.put<Profs>(environment.backendHost+"/profs/"+id,profs);
  }
  public getModuleOfProf(id: number){
    return this.http.get(environment.backendHost+"/profs/"+id+"/listModule");
  }


}
