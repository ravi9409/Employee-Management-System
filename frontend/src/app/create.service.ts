import { Injectable } from '@angular/core';
import { Employee } from './employee-list/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private http:HttpClient) { }

  //httpclient header add
  createEmployees(employee: Employee):Observable<Object> {
    return this.http.post('http://localhost:8080/createmployees',employee,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token',
        'Accept': 'application/json'
      }
    })
  }

}
