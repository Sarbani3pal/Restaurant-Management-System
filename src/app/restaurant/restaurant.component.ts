import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  title = 'Restaurant Management'
  restaurants: any = [];

  isGreen = true
  

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllRestaurant()
  }

  addrestaurant(){
   
    console.log("addrestaurant button clicked!!")
    // Take user to /add-restaurant url
    this.router.navigateByUrl('/add-restaurant')
  }

  updaterestaurant(){
    console.log("updaterestaurant button clicked!!")
    // Take user to /update-restaurant url
    this.router.navigateByUrl('/update-restaurant')
  }

  fetchAllRestaurant(){
    this.http.get("http://localhost:8081/Restaurant/getall")
    .subscribe(resp =>{
      this.restaurants = resp;
      console.log('restaurant retrieved successfully:', this.restaurants)
    }, error => {
      console.error('Error retrieving restaurant:', error);
    });
  }

  deleteRestaurant(restaurantId:Number){
    
    const url = 'http://localhost:8081/Restaurant/delete/' +restaurantId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Restaurant deleted successfully');
      this.fetchAllRestaurant()
    }, error => {
      console.error('Error deleting payment:', error);
    });
  }
  
  }

