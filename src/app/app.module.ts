import { NgModule , ErrorHandler }   from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes , Router, ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent }  from './app.component';
import { BookComponent }  from './book.component';
import { AddBookComponent }  from './addbook.component';
import { BookDetailComponent }  from './book-detail.component';
import { BookService }  from './book.service';
import { AppRoutingModule }  from './app-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient, HttpParams , HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HttpModule, JsonpModule } from '@angular/http';
import { Data1Service } from './Data1.service';
import { BlogComponent } from './blog/blog.component';
import { HighchartComponent } from './highchart/highchart.component';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'Highcharts';
import More from 'highcharts/highcharts-more';
import Tree from 'highcharts/modules/treemap';
import Heatmap from 'highcharts/modules/heatmap';


@NgModule({
  imports: [     
    BrowserModule,
		FormsModule,
		AppRoutingModule,
    HttpClientModule,
		BrowserAnimationsModule,
    ChartModule.forRoot(highcharts)
  ],
  declarations: [
        AppComponent,
        BookComponent,
    		AddBookComponent,
    		BookDetailComponent,
    		FormComponent,
    		DashboardComponent,
    		BlogComponent,
    		HighchartComponent
  ],
  providers: [ BookService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }