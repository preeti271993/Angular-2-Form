import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { Data1Service } from '../Data1.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [Data1Service]
})
export class DashboardComponent implements OnInit {
    
  data: Observable<Array<any>>;

  constructor(private service: Data1Service) {
    this.data = service.getUser();
    console.log(this.data);
  }

  ngOnInit() {
     

  }

 
}

