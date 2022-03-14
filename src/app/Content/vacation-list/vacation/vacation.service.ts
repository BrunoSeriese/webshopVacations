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


  addVacation(price: string, country: string, city: string, seasonID: string, description: string){

    let newVacation: { country: string; city: string; price: number; id: number; description: string; seasonID: number } =  {
      id: 13,country: country, city: city, seasonID: Number(seasonID), description: description , price: Number(price)
    }


  }

  deleteVacation(cityName: string){


  }







}
