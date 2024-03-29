import { Chart, registerables } from 'chart.js';
import { Component, OnInit } from '@angular/core';

Chart.register(...registerables);

@Component({
  selector: 'app-chart-details',
  templateUrl: './chart-details.component.html',
  styleUrls: ['./chart-details.component.css']
})
export class ChartDetailsComponent implements OnInit{
  constructor(){ }
  ngOnInit(): void {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['Home', 'Projects', 'Chart Details', 'Slider', 'Menu', 'The Socials'],
          datasets: [{
              label: '# of Clicks',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }
}
