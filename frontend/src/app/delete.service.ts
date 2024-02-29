import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee-list/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {


  constructor(private http:HttpClient) { }

  //httpclient header add
  deleteEmployee(id: number):Observable<Object> {
    return this.http.delete('http://localhost:8080/employee/'+id,{

    })
  }

}
