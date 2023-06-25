import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  title = "Item Management"
  items : any =[]
  isGreen = true;
  constructor(private router : Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllItems()
  }
  addItems(){
    console.log("addItem button clicked")
    this.router.navigateByUrl('/add-item')
  }
  updateItems(){
    console.log("updateItem button clicked")
    this.router.navigateByUrl('/update-item')
  }
  fetchAllItems(){
    this.http.get("http://localhost:8081/items/getall")
    .subscribe(resp => {
      this.items = resp;
      console.log("Items retrieved successfully", this.items)
    }, error =>{
      console.log("Error in retrieving item: ",error);
    });
  }
  deleteItem(itemId: Number){
    const url = 'http://localhost:8081/items/delete/'+itemId
    console.log(url);
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Item deleted successfully');
      this.fetchAllItems()
    }, error => {
      console.error('Error in deleting Item:', error);
    });
  }
// updateitem(itemId: Number){

//   this.router.navigateByUrl('/update-item');
//   }
// 
}