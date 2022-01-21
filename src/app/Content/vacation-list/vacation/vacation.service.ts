import {CartItemService} from "../../cart-list/cart-item/cart-item.service";
import {Injectable} from "@angular/core";
import {VacationModel} from "./vacation.model";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import firebase from "firebase/compat";
import Query = firebase.firestore.Query;
import {query} from "@angular/fire/firestore";
import firestore = firebase.firestore;
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

  addVacation( price: string, country: string, city: string, seasonID: string, description: string){
    var vacationRef = this.db.collection("vacations");
    let newVacation: { country: string; city: string; price: number; id: number; description: string; seasonID: number } =  {
      id: 13,country: country, city: city, seasonID: Number(seasonID), description: description , price: Number(price)
    }
    vacationRef.add(newVacation);

  }

  deleteVacation(cityName: string){
    var vacationRef = this.db.collection("vacations").get().forEach(a =>{
     var myQuery =  a.query.where('city', '==', cityName);

     myQuery.get().then(snapshot =>{
       snapshot.docs.forEach(doc =>{
         doc.ref.delete();
       })
     })
    });

  }







}
