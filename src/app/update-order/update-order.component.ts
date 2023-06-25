import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {
  orderForms : FormGroup;
  constructor(private formbuilder : FormBuilder, private http: HttpClient, private router: Router) {
    this.orderForms = this.formbuilder.group({
      id: ['',Validators.required],
      customerid: ['',Validators.required],
      type: ['',Validators.required],
      number: ['',Validators.required],
      description: ['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  updateorder()
  {
    let orderData = this.orderForms.value;
  this.http.put('http://localhost:8081/orders/updateOrders',orderData)
     .subscribe(response => {
      console.log('Order saved to DB', response)
      this.router.navigateByUrl('/order')
    }, error =>{
      console.error('Error in update order  save',error)
    });
    }
}

