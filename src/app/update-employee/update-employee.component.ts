import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employeeForms : FormGroup;
  constructor(private formbuilder : FormBuilder, private http: HttpClient, private router: Router) {
    this.employeeForms = this.formbuilder.group({
      id: ['',Validators.required],
      name: ['',Validators.required],
      mobile: ['',Validators.required],
      email: ['',Validators.required],
      username: ['',Validators.required],
      password: ['',Validators.required],
      address: ['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
updateemployee()
{
let employeeData = this.employeeForms.value;
this.http.put('http://localhost:8081/employee/updateemployee',employeeData)
   .subscribe(response => {
    console.log('employee saved to DB', response)
    this.router.navigateByUrl('/employee')
  }, error =>{
    console.error('Error in update employee  save',error)
  });
  }
  }


