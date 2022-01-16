import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.scss']
})
export class VacationComponent implements OnInit {
  @Input() vacation!: {id: number,country: string,city: string,seasonID: number, description: string}

  constructor() { }

  ngOnInit() {

  }

}
