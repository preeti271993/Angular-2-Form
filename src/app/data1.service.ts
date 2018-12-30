import { Injectable } from '@angular/core';
import { HttpClient, HttpParams , HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HttpModule, JsonpModule } from '@angular/http';
/*import { throwError } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';*/
//import 'rxjs/add/observable/throw';

@Injectable({
	providedIn: 'root',
})

export class Data1Service {

  constructor(private http: HttpClient) {}

  getUser(): Observable<any> {
    /*return this.http.request('./data/people.json')
        .map(res => res.json());*/

        return this.http.get('https://jsonplaceholder.typicode.com/users')
          // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
          //.map(res => res.json())
          //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
          //.catch((error: HttpErrorResponse ) => Observable.throw(error));

  } 

}
 