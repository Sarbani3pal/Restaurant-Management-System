import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router }  from '@angular/router';
@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
  itemForms :FormGroup;
  constructor(private formbuilder : FormBuilder,private http: HttpClient,private router: Router) { 
    this.itemForms = this.formbuilder.group({
      id: ['',Validators.required],
      stock: ['',Validators.required],
      number: ['',Validators.required],
      type: ['',Validators.required],
      description: ['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  updateitem()
  {
    let itemData = this.itemForms.value;
  this.http.put('http://localhost:8081/items/updateItem',itemData)
     .subscribe(response => {
      console.log('Item saved to DB', response)
      this.router.navigateByUrl('/item')
    }, error =>{
      console.error('Error in update item  save',error)
    });
    }
  }
