import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiTodoService {

  constructor(private http: HttpClient) { }

   private extractData(res: Response) {
  let body = res;
  return body || { };
}
   
 /* const endpoint = 'https://jsonplaceholder.typicode.com/todos';
  const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};*/

}
