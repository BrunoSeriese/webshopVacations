import { Component, OnInit } from '@angular/core';
import {CartItemService} from "./cart-item/cart-item.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cartItems: {name: string,price: number}[] = [];
  totalPrice: number | undefined;

  constructor(private cartItemService: CartItemService) {
    this.cartItems = this.cartItemService.cartItems;

  }

  ngOnInit(): void {
    console.log(this.cartItems)
    this.totalPrice = this.cartItemService.totalPrice;

  }

}
