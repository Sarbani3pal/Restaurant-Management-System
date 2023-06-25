import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  itemForms : FormGroup;
  constructor(private formbuilder : FormBuilder, private http: HttpClient, private router: Router) {
    this.itemForms = this.formbuilder.group({
      stock: ['',Validators.required],
      number: ['',Validators.required],
      type: ['',Validators.required],
      description: ['',Validators.required]
    
    })
   }

  ngOnInit(): void {
  }

  saveItem(){
    let itemData = this.itemForms.value;
    this.http.post('http://localhost:8081/items/saveitem',itemData)
    .subscribe(response => {
      console.log('item saved to DB', response)
      this.router.navigateByUrl('/item')
    }, error =>{
      console.error('Error in item save',error)
    });
  }
}
