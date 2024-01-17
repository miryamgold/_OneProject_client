import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeData } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://localhost:44305/api/'; 
  constructor(private http: HttpClient) { }

  getEmployeeList(): Observable<EmployeeData[]> {
    return this.http.get<EmployeeData[]>(`${this.apiUrl}Employee/GetEmployeeList`);
  }
 
  
}
