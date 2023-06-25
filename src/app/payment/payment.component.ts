import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  title = 'Payments Management'
  payments: any = [];

  isGreen = true
  

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllPayments()
  }

  addpayments(){
   
    console.log("addPayments button clicked!!")
    // Take user to /add-Payments url
    this.router.navigateByUrl('/add-payment')
  }

  
  updatepayment(){
   
    console.log("updatePayments button clicked!!")
    // Take user to /update-Payments url
    this.router.navigateByUrl('/update-payment')
  }
  fetchAllPayments(){
    this.http.get("http://localhost:8081/payments/getall")
    .subscribe(resp => {
      this.payments = resp;
      console.log("Payments retrieved successfully", this.payments)
    }, error=>{
      console.log("Error in retrieving payment: ",error);
    });
  }

  deletePayment(paymentId:Number){
    
    const url = 'http://localhost:8081/payments/delete/' +paymentId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Payments deleted successfully');
      this.fetchAllPayments()
    }, error => {
      console.error('Error deleting payment:', error);
    });
  }

}