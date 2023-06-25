import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sell',
  templateUrl: './add-sell.component.html',
  styleUrls: ['./add-sell.component.css']
})
export class AddSellComponent implements OnInit {
  sellForms : FormGroup;
  constructor(private formbuilder : FormBuilder, private http: HttpClient, private router: Router) {
    this.sellForms = this.formbuilder.group({
      name: ['',Validators.required],
      type: ['',Validators.required],
      description: ['',Validators.required],
    })
   }

  ngOnInit(): void {
  }

  saveSell(){
    let sellData = this.sellForms.value;
    this.http.post('http://localhost:8081/sells/saveSell',sellData)
    .subscribe(response => {
      console.log('sell saved to DB', response)
      this.router.navigateByUrl('/sell')
    }, error =>{
      console.error('Error in sell save',error)
    });
  }
}
