import {CartItemService} from "../../cart-list/cart-item/cart-item.service";
import {Injectable} from "@angular/core";
@Injectable()
export class VacationService {

  vacations = [
    {
      id: 1,
      price: 300,
      country: 'Bulgaria',
      city: 'Sofia',
      seasonID: 1,
      description: 'This is an ideal, amazing , beautiful place,' +
        'walk here and see all the locals and buildings!'

    }, {
      id: 2,
      price: 300,
      country: 'The Netherlands',
      city: 'Den Haag',
      seasonID: 1,
      description: 'This is an ideal, amazing , beautiful place,' +
        'walk here and see all the locals and buildings!'
    }, {
      id: 3,
      price: 300,
      country: 'France',
      city: 'Montpellier',
      seasonID: 1,
      description: 'This is an ideal, amazing , beautiful place,' +
        'walk here and see all the locals and buildings!'
    },{
      id: 4,
      price: 300,
      country: 'Greece',
      city: 'Kos',
      seasonID: 2,
      description: 'This is an ideal, amazing , beautiful place,' +
        'walk here and see all the locals and buildings!'
    },{
      id: 5,
      price: 300,
      country: 'Ukraine',
      city: 'Kiev',
      seasonID: 2,
      description: 'This is an ideal, amazing , beautiful place,' +
        'walk here and see all the locals and buildings!'
    },{
      id: 6,
      price: 300,
      country: 'Latvia',
      city: 'Riga',
      seasonID: 2,
      description: 'This is an ideal, amazing , beautiful place,' +
        'walk here and see all the locals and buildings!'
    },{
      id: 7,
      price: 300,
      country: 'France',
      city: 'Marseille',
      seasonID: 3,
      description: 'This is an ideal, amazing , beautiful place,' +
        'walk here and see all the locals and buildings!'
    },{
      id: 8,
      price: 300,
      country: 'Italy',
      city: 'Rome',
      seasonID: 3,
      description: 'This is an ideal, amazing , beautiful place,' +
        'walk here and see all the locals and buildings!'
    },{
      id: 9,
      price: 300,
      country: 'Spain',
      city: 'Valencia',
      seasonID: 3,
      description: 'This is an ideal, amazing , beautiful place,' +
        'walk here and see all the locals and buildings!'
    },{
      id: 10,
      price: 300,
      country: 'Germany',
      city: 'Munich',
      seasonID: 4,
      description: 'This is an ideal, amazing , beautiful place,' +
        'walk here and see all the locals and buildings!'
    },{
      id: 11,
      price: 300,
      country: 'Romania',
      city: 'Bucaresti',
      seasonID: 4,
      description: 'This is an ideal, amazing , beautiful place,' +
        'walk here and see all the locals and buildings!'
    },{
      id: 12,
      price: 300,
      country: 'Germany',
      city: 'Berlin',
      seasonID: 4,
      description: 'This is an ideal, amazing , beautiful place,' +
        'walk here and see all the locals and buildings!'
    }
  ]

  addVacation(id: number, price: number, country: string,
              city: string, seasonID: number, description: string) {
    this.vacations.push({
      id: id, price: price, country: country,
      city: city, seasonID: seasonID, description: description
    })
  }


}
