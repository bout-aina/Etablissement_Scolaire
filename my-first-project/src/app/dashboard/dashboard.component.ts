import { Component, OnInit } from '@angular/core';
import {ModuleService} from "../services/module.service";
import {EtudiantService} from "../services/etudiant.service";
import {ProfsService} from "../services/profs.service";
import {EventService} from "../services/event.service";
import { Chart, registerables } from 'chart.js';
import {ApexChart, ApexNonAxisChartSeries} from "ng-apexcharts";
import {DepartementService} from "../services/departement.service";
import {Departement} from "../model/departement.model";
import {catchError, Observable, throwError} from "rxjs";





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public nbrProf  !: Number[]
  myDate = new Date();
  chartSeries !: ApexNonAxisChartSeries ;
  chartDetails : ApexChart ={
    type:'pie',
    toolbar : {
      show : false,

    },



  };
  chartLabels = ["Prepa","1 Cycle","2 Cycle"];


  constructor(private etdService: EtudiantService,
              private moduleService: ModuleService,
              private profService: ProfsService,
              private  depService : DepartementService,

              private  eventService : EventService) {


    Chart.register(...registerables);
  }
  title = 'angular-chart';
  lengthEtd: number = 0;
  lengthModule: number = 0;
  lengthProf: number = 0;
  lengthActivity: number = 0;
  counts: number[] = [];
  events: number[] = [];
  nomdep : string[] = [];
  nbretds : number[] = [];
  pieChart : number [] = [];

  ngOnInit(): void {
    this.etdService.pourcentage()
      .subscribe({
        next: (result) => {
          result.forEach(x => {


            this.pieChart.push(x);
          });
        }})
    console.log(this.pieChart)
    this.chartSeries = this.pieChart;
    //nbr des prof pour chaque departement


//nbre des events
    this.eventService.eventbymonth()
      .subscribe({
        next: (result) => {
          result.forEach(x => {


            this.events.push(x);
          });
        }})
    // Bar chart
    const barCanvasEle: any = document.getElementById('bar_chart')
    const barChart = new Chart(barCanvasEle.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Janvier', 'Fevrier', 'Mars', 'Avril ', 'Mai', 'Juin', 'Juillet', 'Août', 'Sept', 'Octob', 'Novem', 'Décem'],
        datasets: [{
          label: 'Nombre des activités',
          data: this.events,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Line Chart
    const lineCanvasEle: any = document.getElementById('line_chart')
    // le nbr de prof dans chaque departement
    this.profService.nbrProfPourChaqueDep()
      .subscribe({
        next: (result) => {
          result.forEach(x => {


            this.counts.push(x);
          });
        }})
    //les noms des departements
    this.profService.getDeps()
      .subscribe({
        next: (result) => {
          result.forEach(x => {


            this.nomdep.push(x);
          });
        }})
    // le nbr des etudiants de chaque departement
    this.etdService.nbrEtdPourChaqueDep()
      .subscribe({
        next: (result) => {
          result.forEach(x => {


            this.nbretds.push(x);
          });
        }})
    // console.log(this.counts)
    const lineChar = new Chart(lineCanvasEle.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.nomdep,
        datasets: [
          { data: this.counts, label: 'Profs', borderColor: 'rgb(255,105,180)' },
          { data: this.nbretds, label: 'Etudiants', borderColor: 'rgba(54, 162, 235)' },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    this.etdService.etudiantlist().subscribe((data: any) => {
      this.lengthEtd = data.length;
      //console.log(data.length)
    })
    this.moduleService.getModules().subscribe((data: any) => {
      this.lengthModule = data.length;
      //console.log(data.length)
    })

    this.profService.getProfs().subscribe((data: any) => {
      this.lengthProf = data.length;
      //console.log(data.length)
    })
    this.eventService.eventlist().subscribe((data: any) => {
      this.lengthActivity = data.length;
      //console.log(data.length)
    })


  }
}
