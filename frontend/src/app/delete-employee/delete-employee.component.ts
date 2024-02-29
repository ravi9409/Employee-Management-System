import { Employee } from '../employee-list/employee';
import { DeleteService } from './../delete.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrl: './delete-employee.component.css'
})
export class DeleteEmployeeComponent {

  employees:Employee= {
    id: 0,
    firstName: '',
    lastName: '',
    emailId: '',
  }

  constructor(private deleteService: DeleteService) {

  }
  deleteEmployee(){
      return this.deleteService.deleteEmployee(this.employees.id).subscribe((data: any) => {
    } );

  }


}
