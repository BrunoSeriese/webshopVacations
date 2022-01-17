import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {VacationService} from "./vacation/vacation.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-vacation-list',
  templateUrl: './vacation-list.component.html',
  styleUrls: ['./vacation-list.component.scss']
})
export class VacationListComponent implements OnInit {
  vacations: { id: number, price: number, country: string, city: string, seasonID: number, description: string }[] = [];
  test = true;
  location: string | undefined
  paramsSubscription: Subscription | undefined;

  constructor(private vacationService: VacationService, private route: ActivatedRoute) {
    this.vacations = this.vacationService.vacations;
  }

  ngOnInit(): void {
    this.location = this.route.snapshot.params['id']
    if (this.route) {
      this.route.params.subscribe(params => {
        console.log(params)
        this.location = params['id'];
      })
    }


  }





}
