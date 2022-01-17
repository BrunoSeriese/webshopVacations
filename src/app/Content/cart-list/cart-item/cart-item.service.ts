


export class CartItemService{

  cartItems : {name: string, price: number}[] = [];
  totalPrice = 0;

  addItem(name: string, price: number) {
    this.cartItems.push({ name: name, price: price
    })
    this.totalPrice += price;


  }

}
