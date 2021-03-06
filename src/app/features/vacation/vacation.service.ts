import {CartItemService} from "../cart-item/cart-item.service";
import {Injectable} from "@angular/core";
import {ContentDAOService} from "../../core/services/contentDAO.service";
import {VacationModel} from "./vacation.model";

@Injectable()
export class VacationService {


  vacations: { id: number, price: number, country: string, city: string, seasonID: number, description: string }[] = [];

  constructor(public contentDAO: ContentDAOService) {

    console.log(contentDAO.getAll().subscribe((x) => {

      x.forEach(y =>
        this.vacations.push(y)
      )
    }));
  }

  addVacation(price: string, country: string, city: string, seasonID: string, description: string) {
    let vac = new VacationModel(1, country, parseInt(price), city, parseInt(seasonID), description)
    this.contentDAO.addVacation(vac)


  }

  deleteVacation(id: number) {
    this.vacations.forEach((vac, index) => {
      if (vac.id == id) {
        // this.vacations.splice(index)
      }
    })
    this.contentDAO.deleteVacation(id)

  }


}
