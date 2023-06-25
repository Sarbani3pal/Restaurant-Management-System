import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  restaurantForms : FormGroup;
  constructor(private formbuilder : FormBuilder, private http: HttpClient, private router: Router) {
    this.restaurantForms = this.formbuilder.group({
      name: ['',Validators.required],
      type: ['',Validators.required],
      description: ['',Validators.required],
      address: ['',Validators.required],

    })
   }

  ngOnInit(): void {
  }

  saverestaurant(){
    let restaurantData = this.restaurantForms.value;
    this.http.post('http://localhost:8081/Restaurant/saveRestaurant',restaurantData)
    .subscribe(response => {
      console.log('restaurant saved to DB', response)
      this.router.navigateByUrl('/restaurant')
    }, error =>{
      console.error('Error in restaurant save',error)
    });
  }
}
