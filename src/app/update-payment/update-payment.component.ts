import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-payments',
  templateUrl: './update-payment.component.html',
  styleUrls: ['./update-payment.component.css']
})
export class UpdatePaymentComponent implements OnInit {
  paymentsForms : FormGroup;
  constructor(private formbuilder : FormBuilder, private http: HttpClient, private router: Router) {
    this.paymentsForms = this.formbuilder.group({
      id: ['',Validators.required],
      customerid: ['',Validators.required],
      date: ['',Validators.required],
      amount: ['',Validators.required],
      description: ['',Validators.required],
    })
   }

  ngOnInit(): void {
  }
  updatepayment()
  {
  let paymentsData = this.paymentsForms.value;
  this.http.put('http://localhost:8081/payments/updatePayments',paymentsData)
     .subscribe(response => {
      console.log('employee saved to DB', response)
      this.router.navigateByUrl('/payment')
    }, error =>{
      console.error('Error in update employee  save',error)
    });
    }
}

