import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee-list/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployees() {
    return this.http.get('http://localhost:8080/employees')
  }

  getEmployeeById(id:number):Observable<Object>{
    return this.http.get(`http://localhost:8080/employee/${id}`);
  }
}
