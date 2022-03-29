import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {CartItemService} from "../../cart-list/cart-item/cart-item.service";
import {ContentDAO} from "../../content.DAO";

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.scss']
})
export class VacationComponent implements OnInit {
  @Input() vacation!: {id: number,price: number,country: string,city: string,seasonID: number, description: string}

  constructor(private cartItemService: CartItemService,private contentDAO: ContentDAO) { }

  ngOnInit() {

  }

  addToCart(id: number){
    this.contentDAO.addToCart(id)
  }

}
