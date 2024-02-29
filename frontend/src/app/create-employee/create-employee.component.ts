import { Component } from '@angular/core';
import { Employee } from '../employee-list/employee';
import { CreateService } from '../create.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  employees:Employee= {
    id: 0,
    firstName: '',
    lastName: '',
    emailId: '',
  }

  constructor(private createService: CreateService) {

  }

  onSubmit(){
    this.createService.createEmployees(this.employees).subscribe((data: any) => {
      console.log(data);
    });
  }
}
