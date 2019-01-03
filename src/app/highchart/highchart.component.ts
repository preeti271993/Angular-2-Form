import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.css']
})
export class HighchartComponent{
  
   chartOptions : any;
  constructor() {
  
    this.chartOptions = {
   chart: {
    type: 'bar'
   },
   title: {
    text: 'Fruit Consumption',
    style: {
      color : "#ff0000"
    }
   },
  xAxis: {
   categories: ['Apples', 'Bananas', 'Oranges']
  },
  yAxis: {
   title: {
    text: 'Fruit eaten'
   }
  },
  series: [{
   name: 'Jane',
   data: [1, 0, 4]
  }, { 
   name: 'John',
   data: [5, 7, 3]
  }]
  }

}
   }


