import {LoginService} from "../../user/login.service";
import {Injectable} from "@angular/core";
import {ContentDAO} from "../../content.DAO";

@Injectable()
export class CartItemService{

  cartItems : {name: string, price: number}[] = [];
  totalPrice = 0;

  constructor(private loginService: LoginService,private contentDAO: ContentDAO) {
  }


  addItem(name: string, price: number) {
    this.cartItems.push({ name: name, price: price
    })



  }

  makeList(){
    let car = this.contentDAO.getCartsByUser();
    car.forEach(subject =>{
      subject.forEach(vacationId =>{
        console.log(vacationId['vacationId'])
        this.contentDAO.getVacationById(vacationId['vacationId']).forEach(vacationItem =>{
          console.log(vacationItem['price'] + "this is the price!")
          if (vacationItem['price'] != null){
            let cartItem = {name: vacationItem['city'],price: vacationItem['price']}
            this.cartItems.push(cartItem)
            this.totalPrice += vacationItem['price']
            console.log(this.totalPrice)
            console.log(this.cartItems)
          }
        })
      })
    })
  }

}
