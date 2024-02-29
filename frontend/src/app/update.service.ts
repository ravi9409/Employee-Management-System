import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee-list/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private baseUrl = 'http://localhost:8080/employee/';

  constructor(private http:HttpClient) { }

  //httpclient header add
  updateEmployee(id:number,employee: Employee):Observable<Object> {
    return this.http.put(this.baseUrl+id,employee)
  }
}
