import { Component, OnInit } from '@angular/core';
import {VacationService} from "../../../../features/vacation/vacation.service";

@Component({
  selector: 'app-delete-vacation',
  templateUrl: './delete-vacation.component.html',
  styleUrls: ['./delete-vacation.component.scss']
})
export class DeleteVacationComponent implements OnInit {
  vacations: { id: number, price: number, country: string, city: string, seasonID: number, description: string }[] = [];
  constructor(public vacationService: VacationService) {
    this.vacations = vacationService.vacations;
  }

  ngOnInit(): void {
  }

}
