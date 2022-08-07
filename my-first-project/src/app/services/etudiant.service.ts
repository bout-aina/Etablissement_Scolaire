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
export class EtudiantService {

  constructor(private http:HttpClient) { }
  public nbrEtdPourChaqueDep():Observable<Array<number>>{
    return this.http.get<Array<number>>(environment.backendHost+"/etdNbr")
  }
  public pourcentage():Observable<Array<number>>{
    return this.http.get<Array<number>>(environment.backendHost+"/pourcentagedechaqueEtat")
  }
  public  etudiantlist():Observable<Array<Etudiant>>{
    return this.http.get<Array<Etudiant>>(environment.backendHost+"/etudiants")
  }

  public saveEtd(etd : Etudiant):Observable<Etudiant>{

    return this.http.post<Etudiant>(environment.backendHost+"/etudiant",etd);

  }
  public deleteEtd(id: number){
    return this.http.delete(environment.backendHost+"/etudiant/"+id);
  }
  public updateProf(id: number,etd : Etudiant):Observable<Etudiant>{

    return this.http.put<Etudiant>(environment.backendHost+"/etudiant/"+id,etd);
  }

}
