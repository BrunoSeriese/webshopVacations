import { Component, OnInit } from '@angular/core';
import {VacationService} from "../../../../features/vacation/vacation.service";

@Component({
  selector: 'app-add-vacation',
  templateUrl: './add-vacation.component.html',
  styleUrls: ['./add-vacation.component.scss']
})
export class AddVacationComponent implements OnInit {

  constructor(public  vacationService: VacationService) { }

  ngOnInit(): void {
  }

}
