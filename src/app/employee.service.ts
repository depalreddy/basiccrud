import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  baseUrl: string = environment.URL;

  // public baseUrl = 'http://localhost:3100/employee/add-emp';
  // public baseUrl1 = 'http://localhost:3100/employee/get-emp';

  createEmployee(employee: any) {
    console.log(employee);
    return this.http.post(this.baseUrl + "/add-emp", employee);
  }
  getEmployee(){
   return this.http.get(this.baseUrl + "/get-emp");
  }

  getEmployeeDetails(id: number) {
    return this.http.get(this.baseUrl + `/view-emp/${id}`);
  }
}
