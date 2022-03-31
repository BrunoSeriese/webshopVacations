import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: {name: string, price: number}
  constructor() { }

  ngOnInit(): void {
  }

}
