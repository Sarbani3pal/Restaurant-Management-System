import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  title = 'Sells Management'
  sells: any = [];

  isGreen = true
  

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllSells()
  }

  addsell(){
   
    console.log("addSells button clicked!!")
    // Take user to /add-Sell url
    this.router.navigateByUrl('/add-sell')
  }

  updatesell(){
    console.log("updateSells button clicked!!")
    // Take user to /add-Sell url
    this.router.navigateByUrl('/update-sell')
  }

  fetchAllSells(){
    this.http.get("http://localhost:8081/sells/getall")
    .subscribe(resp => {
      this.sells = resp;
      console.log("Sells retrieved successfully", this.sells)
    }, error=>{
      console.log("Error in retrieving sell: ",error);
    });
  }

  deleteSell(sellId:Number){
    
    const url = 'http://localhost:8081/sells/delete/' +sellId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Sells deleted successfully');
      this.fetchAllSells()
    }, error => {
      console.error('Error deleting sell:', error);
    });
  }

}