import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProfsService} from "../services/profs.service";
import {catchError, map, Observable, throwError} from "rxjs";
import {Profs} from "../model/prof.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profs',
  templateUrl: './profs.component.html',
  styleUrls: ['./profs.component.css']
})
export class ProfsComponent implements OnInit {
  profs! :Observable<Array<Profs>>;
  errorMessage! : string;
  searchProfs! : FormGroup;
  totalLenght : any;
  page : number =1;
  snapshot:any =[];
  constructor(private profsService : ProfsService,private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.searchProfs=this.fb.group({
      keyword : this.fb.control("")
    });
    this.handleSearchProfs()
    this.profs=this.profsService.getProfs();
  }

  handleSearchProfs() {
    let kw=this.searchProfs?.value.keyword;
    this.profsService.searchProfs(kw).subscribe((data)=>{
      this.snapshot = data;
      this.totalLenght = data.length;
      console.log(this.snapshot)
    }
    );
  }



  handleDeleteProf(p: Profs) {
    let conf = confirm("Vous etes sur?");
    if(!conf) return;
    this.profsService.deleteProf(p.id).subscribe({
      next : (resp) => {
        this.profs=this.profs.pipe(
          map(data=>{
            let index=data.indexOf(p);
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

  handleEditProf(p: Profs) {
    this.router.navigateByUrl("admin/updateProf/"+p.id,{state :p});
  }

  handleDetailsProf(p: Profs) {
    this.router.navigateByUrl("admin/detailsProf/"+p.id,{state :p});
  }
}
