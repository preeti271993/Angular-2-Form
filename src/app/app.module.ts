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

@NgModule({
  imports: [     
    BrowserModule,
		FormsModule,
		AppRoutingModule,
    HttpClientModule,
		BrowserAnimationsModule
  ],
  declarations: [
        AppComponent,
        BookComponent,
    		AddBookComponent,
    		BookDetailComponent,
    		FormComponent,
    		DashboardComponent
  ],
  providers: [ BookService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }