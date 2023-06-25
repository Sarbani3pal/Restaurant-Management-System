import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  title = 'Orders Management'
  orders: any = []
  isGreen = true;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllOrders()
  }

  addorder(){
   
    console.log("addOrders button clicked!!")
    // Take user to /add-Orders url
    this.router.navigateByUrl('/add-order')
  }
  updateorder(){
   
    console.log("updateorders button clicked!!")
    // Take user to /update-order url
    this.router.navigateByUrl('/update-order')
  }

  fetchAllOrders(){
    this.http.get("http://localhost:8081/orders/getall")
    .subscribe(resp => {
      this.orders = resp;
      console.log("Orders retrieved succesfully", this.orders)
    }, error => {
      console.log("Error in retrieving orders: ", error);
    });
  }

  deleteOrder(orderId:Number){
    
    const url = 'http://localhost:8081/orders/delete/' +orderId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Orders deleted successfully');
      this.fetchAllOrders()
    }, error => {
      console.error('Error deleting Orders:', error);
    });
  }

}