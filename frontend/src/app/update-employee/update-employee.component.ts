import { Component } from '@angular/core';
import { UpdateService } from '../update.service';
import { Employee } from '../employee-list/employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {

  employees:Employee= {
    id: 0,
    firstName: '',
    lastName: '',
    emailId: '',
  }

  constructor(private updateService: UpdateService,private route: ActivatedRoute,private employeeService: EmployeeService) {
    this.route.params.subscribe(params => {
      this.employees.id = params['id'];
    });

  }

  ngOnInit(): void {
    this.employees.id= this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.employees.id).subscribe(data => {
      this.employees = data as Employee;
    }, error => console.log(error));
  }

  updateEmployee(){
      return this.updateService.updateEmployee(this.employees.id,this.employees).subscribe((data: any) => {
        console.log(data);
    } );

  }


}
