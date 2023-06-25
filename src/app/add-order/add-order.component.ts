import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  orderForms : FormGroup;
  constructor(private formbuilder : FormBuilder, private http: HttpClient, private router: Router) {
    this.orderForms = this.formbuilder.group({
      customerid: ['',Validators.required],
      type: ['',Validators.required],
      number: ['',Validators.required],
      description: ['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  saveOrders(){
    let orderData = this.orderForms.value;
    this.http.post('http://localhost:8081/orders/saveOrders',orderData)
    .subscribe(response => {
      console.log('order saved to DB', response)
      this.router.navigateByUrl('/order')
    }, error =>{
      console.error('Error in order save',error)
    });
  }
}
