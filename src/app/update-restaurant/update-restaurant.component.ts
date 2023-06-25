import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  restaurantForms : FormGroup;
  constructor(private formbuilder : FormBuilder, private http: HttpClient, private router: Router) {
    this.restaurantForms = this.formbuilder.group({
      id: ['',Validators.required],
      name: ['',Validators.required],
      type: ['',Validators.required],
      description: ['',Validators.required],
      address: ['',Validators.required],
    })
   }

  ngOnInit(): void {
  }
  updaterestaurant()
  {
  let restaurantData = this.restaurantForms.value;
  this.http.put('http://localhost:8081/Restaurant/updateRestaurant',restaurantData)
     .subscribe(response => {
      console.log('employee saved to DB', response)
      this.router.navigateByUrl('/restaurant')
    }, error =>{
      console.error('Error in update employee  save',error)
    });
    }
}

