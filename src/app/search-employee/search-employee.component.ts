import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
  title = 'Search Employee'
  search: any = [];

  isGreen = true
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

}
