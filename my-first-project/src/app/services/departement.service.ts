import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Etudiant} from "../model/etudiant.model";
import {environment} from "../../environments/environment";
import {Departement} from "../model/departement.model";

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http:HttpClient) { }
  public  depslist():Observable<Array<Departement>>{
    return this.http.get<Array<Departement>>(environment.backendHost+"/departements")
  }
  public searchDeps(keyword : string):Observable<Array<Departement>>{
    return this.http.get<Array<Departement>>(environment.backendHost+"/departements/search?keyword="+keyword)
  }
  public saveEtd(etd : Departement):Observable<Departement>{

    return this.http.post<Departement>(environment.backendHost+"/departements",etd);

  }
  public deleteEtd(id: number){
    return this.http.delete(environment.backendHost+"/departement/"+id);
  }

  public updateDep(id: number,etd : Departement):Observable<Departement>{

    return this.http.put<Departement>(environment.backendHost+"/departements/"+id,etd);
  }
  public getEtdOfDep(id: number){
    return this.http.get(environment.backendHost+"/departement/"+id+"/etudiants");
  }
  public getProfOfDep(id: number){
    return this.http.get(environment.backendHost+"/departement/"+id+"/profs");
  }
}
