import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-sell',
  templateUrl: './update-sell.component.html',
  styleUrls: ['./update-sell.component.css']
})
export class UpdateSellComponent implements OnInit {
  sellForms : FormGroup;
  constructor(private formbuilder : FormBuilder, private http: HttpClient, private router: Router) {
    this.sellForms = this.formbuilder.group({
      id: ['',Validators.required],
      name: ['',Validators.required],
      type: ['',Validators.required],
      description: ['',Validators.required],
      address: ['',Validators.required],
    })
   }

  ngOnInit(): void {
  }
  updatesell()
  {
  let sellData = this.sellForms.value;
  this.http.put('http://localhost:8081/sells/updateSell',sellData)
     .subscribe(response => {
      console.log('employee saved to DB', response)
      this.router.navigateByUrl('/sell')
    }, error =>{
      console.error('Error in update employee  save',error)
    });
  }
    }