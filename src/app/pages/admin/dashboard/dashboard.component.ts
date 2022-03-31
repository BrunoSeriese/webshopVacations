import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {CartListComponent} from "../../cart-list/cart-list.component";
import {CartItem} from "../../../features/cart-item/cart-item.model";
import {VacationModel} from "../../../features/vacation/vacation.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {





  constructor() {


  }

  ngOnInit(): void {
  }



}
