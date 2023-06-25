import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemComponent } from './item/item.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddSellComponent } from './add-sell/add-sell.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SellComponent } from './sell/sell.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { UpdatePaymentComponent} from './update-payment/update-payment.component';
import { UpdateSellComponent } from './update-sell/update-sell.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
//import { LoginComponent } from './login/login.component';
// import { LogoutComponent } from './logout/logout.component';
// import { ProfileComponent } from './profile/profile.component';
// import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path :  'item',
    component : ItemComponent,
  },

  {
    path : 'sell',
    component : SellComponent,
  },

  {
    path : 'restaurant',
    component : RestaurantComponent,
  },

  {
    path : 'order',
    component : OrderComponent,
  },

  {
    path : 'employee',
    component : EmployeeComponent,
  },

  {
    path : 'payment',
    component : PaymentComponent,
  },

  {
    path : 'add-item',
    component : AddItemComponent,
  },

  {
    path : 'add-sell',
    component : AddSellComponent,
  },

  {
    path : 'add-employee',
    component : AddEmployeeComponent,
  },

  {
    path : 'add-order',
    component : AddOrderComponent,
  },
  
  {
    path : 'add-payment',
    component : AddPaymentComponent,
  },

  {
    path : 'add-restaurant',
    component : AddRestaurantComponent,
  },

  {
    path : 'update-employee',
    component : UpdateEmployeeComponent,
  },

  {
    path : 'update-restaurant',
    component : UpdateRestaurantComponent,
  },

  {
    path :  'update-item',
    component : UpdateItemComponent,
  },

  
  {
    path : 'update-order',
    component : UpdateOrderComponent,
  },

  
  {
    path : 'update-sell',
    component : UpdateSellComponent,
  },

  {
    path : 'update-payment',
    component : UpdatePaymentComponent,
  },

  {
    path : 'search-employee',
    component : SearchEmployeeComponent,
  },

  {
    path : 'search-item',
    component : SearchItemComponent,
  },

  // {
  //   path : 'login',
  //   component : LoginComponent,
  // },

  // {
  //   path : 'logout',
  //   component : LogoutComponent,
  // },

  // {
  //   path : 'dashboard',
  //   component : ProfileComponent,canActivate:[AuthGuard]
  // },

  {
    path : 'signup',
    component : SignupComponent,
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
