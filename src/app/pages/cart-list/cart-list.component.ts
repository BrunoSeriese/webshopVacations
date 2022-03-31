import { Component, OnInit } from '@angular/core';
import {CartItemService} from "../../features/cart-item/cart-item.service";
import {Observable, Subscription} from "rxjs";
import {LoginService} from "../../core/services/login.service";
import {ContentDAOService} from "../../core/services/contentDAO.service";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cartItems: {name: string,price: number}[] = [];
  totalPrice: number | undefined;

  constructor(private cartItemService: CartItemService,
              public contentDAO: ContentDAOService,
              private loginService: LoginService) {


  }

  ngOnInit(): void {
    if(this.loginService.userName != "doe" && this.cartItemService.cartItems.length < 1){
      console.log("NOT A DOE YO YO YO")
      this.cartItemService.makeList();
      this.cartItems = this.cartItemService.cartItems;
      this.totalPrice = this.cartItemService.totalPrice;
    }
    this.cartItems = this.cartItemService.cartItems;
    this.totalPrice = this.cartItemService.totalPrice;



  }




}
