import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {VacationService} from "../../Content/vacation-list/vacation/vacation.service";

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
