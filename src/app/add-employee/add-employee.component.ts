import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForms : FormGroup;
  constructor(private formbuilder : FormBuilder, private http: HttpClient, private router: Router) {
    this.employeeForms = this.formbuilder.group({
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

  saveEmployee(){
    let employeeData = this.employeeForms.value;
    this.http.post('http://localhost:8081/employee/saveemployee',employeeData)
    .subscribe(response => {
      console.log('Employee saved to DB', response)
      this.router.navigateByUrl('/employee')
    }, error =>{
      console.error('Error in employee save',error)
    });
  }
}
