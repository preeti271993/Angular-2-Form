import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
   user_details : string = ("value");

  constructor() { }

  ngOnInit() {
     

  }

  dash_value(value){
     console.log(JSON.stringify(value));

    }
}

