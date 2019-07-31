import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const appRoutes: Routes = [
  // {path: 'link', loadChildren: './list-employees/list-employees.module#ListEmployeesModule'},
  {path: '', component: ListEmployeesComponent},
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'view/:id', component: EmployeeDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
