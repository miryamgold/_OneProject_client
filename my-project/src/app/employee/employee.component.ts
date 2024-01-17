import { Component, OnInit } from '@angular/core';
import { EmployeeData } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeList: EmployeeData[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getDada();
  }

  getDada() {
    this.employeeService.getEmployeeList().subscribe(
      (data: EmployeeData[]) => {
        this.employeeList = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching employee list:', error);
      }
    );
  }
}
