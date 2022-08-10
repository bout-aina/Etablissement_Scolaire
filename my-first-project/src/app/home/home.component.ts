import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Route, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Etudiant} from "../model/etudiant.model";
import {EtudiantService} from "../services/etudiant.service";
import {Departement} from "../model/departement.model";
import {DepartementService} from "../services/departement.service";
import {map} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalLenght : any;
  page : number =1;
  searchformGroup: FormGroup = this.fb.group({
    keyword : this.fb.control("")
  });

  errorMessage!: string;
  mydep!: Departement;
  snapshot:any =[];
  constructor(private departementService: DepartementService,

              private fb : FormBuilder,
              private router : Router) { }

  ngOnInit(): void {
    this.handleSearchDep();


  }
  handleSavedep() {
    this.router.navigateByUrl("admin/newDep",);
  }

  handleSearchDep() {
    let kw=this.searchformGroup?.value.keyword;
    this.departementService.searchDeps(kw).subscribe((data)=>{
        this.snapshot = data;
        this.totalLenght = data.length;
        console.log(this.snapshot)
      }

    );
  }
  handleDeleteModule(id : number , index : number ) {
    let conf = confirm("Are you sure?");
    if(!conf) return;
    this.departementService.deleteEtd(id).subscribe({
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
  handleEditEtudiant(module: Departement) {
    this.router.navigateByUrl("admin/updateDep/"+module.id,{state :module});
  }
  handleDetailetd(module: Departement) {

    this.router.navigateByUrl("admin/detailsdep/"+module.id,{state :module});

  }


}
