import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";  
import { NgForm } from '@angular/forms';
    
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  Loading=false;
  constructor(public authService: AuthService){}

  onSignup(form: NgForm){  
    if(form.invalid){  
      return;  
    }  
    this.authService.CreateUser(form.value.email, form.value.password);  
  }  
  ngOnInit(): void {
  }

}
