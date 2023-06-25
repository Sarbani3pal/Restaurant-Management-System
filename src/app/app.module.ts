import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemComponent } from './item/item.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { OrderComponent } from './order/order.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { AddSellComponent } from './add-sell/add-sell.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { PaymentComponent } from './payment/payment.component';
import { SellComponent } from './sell/sell.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component'
import {RouterModule } from '@angular/router';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { UpdatePaymentComponent } from './update-payment/update-payment.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { UpdateSellComponent } from './update-sell/update-sell.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { SearchItemComponent } from './search-item/search-item.component';
//import { LoginComponent } from './login/login.component';
// import { LogoutComponent } from './logout/logout.component';
// import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
          ItemComponent,
          RestaurantComponent,
          OrderComponent,
          EmployeeComponent,
          AddOrderComponent,
          AddSellComponent,
          AddItemComponent,
          AddPaymentComponent,
          AddRestaurantComponent,
          AddEmployeeComponent,
          PaymentComponent,
          SellComponent,
          SidenavComponent,
          HomeComponent,
          UpdateEmployeeComponent,
          UpdateRestaurantComponent,
          UpdateItemComponent,
          UpdatePaymentComponent,
          UpdateOrderComponent,
          UpdateSellComponent,
          SearchEmployeeComponent,
          SearchItemComponent,
          //LoginComponent,
          //LogoutComponent,
          // ProfileComponent,
          SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
