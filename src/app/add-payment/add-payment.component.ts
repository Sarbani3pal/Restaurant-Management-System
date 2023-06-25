import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {
  paymentForms : FormGroup;
  constructor(private formbuilder : FormBuilder, private http: HttpClient, private router: Router) {
    this.paymentForms = this.formbuilder.group({
      customerid: ['',Validators.required],
      date: ['',Validators.required],
      amount: ['',Validators.required],
      description: ['',Validators.required]
    
    })
   }

  ngOnInit(): void {
  }

  savePayments(){
    let paymentData = this.paymentForms.value;
    this.http.post('http://localhost:8081/payments/savepayments',paymentData)
    .subscribe(response => {
      console.log('payment saved to DB', response)
      this.router.navigateByUrl('/payment')
    }, error =>{
      console.error('Error in payment save',error)
    });
  }
}
