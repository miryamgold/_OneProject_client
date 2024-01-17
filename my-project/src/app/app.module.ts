import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';

const APP_ROUTES: Routes = [
  { path: '', component: EmployeeComponent },
  
 ]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule,
    TableModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
