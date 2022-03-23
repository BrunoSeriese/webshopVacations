import {CartItemService} from "../../cart-list/cart-item/cart-item.service";
import {Injectable} from "@angular/core";
import {VacationModel} from "./vacation.model";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import firebase from "firebase/compat";
import Query = firebase.firestore.Query;
import {query} from "@angular/fire/firestore";
import firestore = firebase.firestore;
import {ContentDAO} from "../../content.DAO";
@Injectable()
export class VacationService {

  tutorialsRef: any;

  vacations: { id: number, price: number, country: string, city: string, seasonID: number, description: string }[] = [];

  constructor(public contentDAO: ContentDAO) {
    console.log("THIS IS THE OBJECT!")
    console.log(contentDAO.getAll().subscribe((x) =>{
      console.log("simple object")
     x.forEach(y =>
       this.vacations.push(y)
     )
    }));
  }

  addVacation(price: string, country: string, city: string, seasonID: string, description: string){

    let newVacation: { country: string; city: string; price: number; id: number; description: string; seasonID: number } =  {
      id: 13,country: country, city: city, seasonID: Number(seasonID), description: description , price: Number(price)
    }


  }

  deleteVacation(id: number){
  this.vacations.forEach(( vac, index)=>{
    if (vac.id == id){
      // this.vacations.splice(index)
    }
  })
    this.contentDAO.deleteVacation(id)

  }







}
