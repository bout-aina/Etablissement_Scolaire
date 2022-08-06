import { Component, OnInit } from '@angular/core';
import {ModuleService} from "../services/module.service";
import {EtudiantService} from "../services/etudiant.service";
import {ProfsService} from "../services/profs.service";
import {EventService} from "../services/event.service";
import { Chart, registerables } from 'chart.js';
import {ApexChart, ApexNonAxisChartSeries} from "ng-apexcharts";





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chartSeries : ApexNonAxisChartSeries = [40,32,28,55];
  chartDetails : ApexChart ={
    type:'pie',
    toolbar : {
      show : true
    }

  };

  constructor(private etdService: EtudiantService,
              private moduleService: ModuleService,
              private profService: ProfsService,

              private  eventService : EventService) {
    Chart.register(...registerables);
  }
  title = 'angular-chart';
  lengthEtd: number = 0;
  lengthModule: number = 0;
  lengthProf: number = 0;
  lengthActivity: number = 0;





  ngOnInit(): void {
   //nbr des prof pour chaque departement

    this.profService.nbrProfPourChaqueDep().subscribe((data)=>{
      let nbrProf = data;


    })
    // Bar chart
    const barCanvasEle: any = document.getElementById('bar_chart')
    const barChart = new Chart(barCanvasEle.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Sales',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
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
    const lineChar = new Chart(lineCanvasEle.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March'],
        datasets: [
          { data: [1,2,3], label: 'Profs', borderColor: 'rgba(54, 162, 235)' },
          { data: [4,3,1], label: 'Etudiants', borderColor: 'rgb(75, 192, 192)' },
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
