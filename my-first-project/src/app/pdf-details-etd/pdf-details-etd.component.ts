import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Etudiant} from "../model/etudiant.model";
import {ActivatedRoute, Router} from "@angular/router";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pdf-details-etd',
  templateUrl: './pdf-details-etd.component.html',
  styleUrls: ['./pdf-details-etd.component.css']
})
export class PdfDetailsEtdComponent implements OnInit {
  myDate = new Date();
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  moduleId!: string;
  etd! : Etudiant ;
  myScriptElement: HTMLScriptElement;
  constructor(private route : ActivatedRoute, private router :Router) {
    this.etd=this.router.getCurrentNavigation()?.extras.state as Etudiant;
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "assets/disable.js";
    document.body.appendChild(this.myScriptElement);

  }


  ngOnInit(): void {
    this.moduleId = this.route.snapshot.params['id'];
    //this.loadScript();
  }

  printthis() {

    var elements = document.getElementById('page')

    // @ts-ignore
    html2canvas(elements).then((canvas) => {
      var imgData = canvas.toDataURL('image/png')

      var doc = new jsPDF()
      var imgHeight = canvas.height * 208 / canvas.width
      doc.addImage(imgData,0,0,208,imgHeight)
      doc.save("image.pdf")

    })

  }
}

