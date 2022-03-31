import {Component, Input, OnInit} from '@angular/core';
import {CartItemService} from "../cart-item/cart-item.service";
import {ContentDAOService} from "../../core/services/contentDAO.service";
import {LoginService} from "../../core/services/login.service";

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.scss']
})
export class VacationComponent implements OnInit {
  @Input() vacation!: {id: number,price: number,country: string,city: string,seasonID: number, description: string}

  buttonMessage = "Add to Cart!";


  constructor(private cartItemService: CartItemService,private contentDAO: ContentDAOService,
              public loginService: LoginService ) { }



  ngOnInit() {

    if (this.loginService.userName == 'doe'){
      this.buttonMessage = "Log in first please!"
    }
  }


  addToCart(id: number){
    this.contentDAO.addToCart(id)
  }

}
