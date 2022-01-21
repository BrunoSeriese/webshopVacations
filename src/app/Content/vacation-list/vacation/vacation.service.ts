import {CartItemService} from "../../cart-list/cart-item/cart-item.service";
import {Injectable} from "@angular/core";
import {VacationModel} from "./vacation.model";
import {AngularFirestore} from "@angular/fire/compat/firestore";
@Injectable()
export class VacationService {

  tutorialsRef: any;

  vacations: { id: number, price: number, country: string, city: string, seasonID: number, description: string }[] = [];
  constructor(private db: AngularFirestore) {
    this.tutorialsRef = this.db.collection<VacationModel>('vacations').snapshotChanges().forEach( a => {
        a.forEach( item => {
          const myData = item.payload.doc.data();
          console.log(myData);
          let test: { country: string; city: string; price: number; id: number; description: string; seasonID: number } = {
            id: myData.id,
            city: myData.city,
            country: myData.country,
            price: myData.price,
            description: myData.description,
            seasonID: myData.seasonID
          }
          this.vacations.push(test)
          console.log(this.vacations);
        })
      }
    );
  }







}
