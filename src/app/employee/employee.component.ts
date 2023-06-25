import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  title = "Employee Management"
  employees : any =[]
  isGreen = true;
  constructor(private router : Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllEmployees()
  }
  addEmployees(){
    console.log("addEmployee button clicked")
    this.router.navigateByUrl('/add-employee')
  }
  updateEmployees(){
    console.log("UpdateEmployee button clicked")
    this.router.navigateByUrl('/update-employee')
  }
  fetchAllEmployees(){
    this.http.get('http://localhost:8081/employee/getall')
    .subscribe(resp => {
      this.employees = resp;
      console.log("Employees retrieved successfully", this.employees)
    }, error =>{
      console.log("Error in retrievingemployee: ",error);
    });
  }
  deleteEmployee(employeeId: Number){
    const url = 'http://localhost:8081/employee/delete/'+employeeId
    console.log(url);
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Employee deleted successfully');
      this.fetchAllEmployees()
    }, error => {
      console.error('Error in deletingemployee:', error);
    });
  }

// updateemployee(employeeId: Number){

//   this.router.navigateByUrl('/update-employee');
//   }
// 
}