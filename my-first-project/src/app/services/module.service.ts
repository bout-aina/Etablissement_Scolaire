import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Module} from "../model/module.model";
import {environment} from "../../environments/environment";

import {Profs} from "../model/prof.model";


@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http:HttpClient) { }
  public  getModules():Observable<Array<Module>>{
    return this.http.get<Array<Module>>(environment.backendHost+"/modules")
  }

  public  getProfs():Observable<any>{
    return this.http.get<any>(environment.backendHost+"/profs")
  }
  public searchModules(keyword : string):Observable<Array<Module>>{
    return this.http.get<Array<Module>>(environment.backendHost+"/modules/search?keyword="+keyword)
  }
  public deleteModule(id: number){
    return this.http.delete(environment.backendHost+"/modules/"+id);
  }
  public saveModule(module : Module):Observable<Module>{

    return this.http.post<Module>(environment.backendHost+"/modules",module);

  }
  public updateModule(id: number,module : Module):Observable<Module>{

    return this.http.put<Module>(environment.backendHost+"/modules/"+id,module);

  }
}
