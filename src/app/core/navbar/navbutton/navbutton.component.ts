import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbutton',
  templateUrl: './navbutton.component.html',
  styleUrls: ['./navbutton.component.scss']
})
export class NavbuttonComponent implements OnInit {

  navbar_items = [
    {link:'vacations/1', name:"Winter"},
    {link:'vacations/2', name:"Spring"},
    {link:'vacations/3', name:"Summer"},
    {link:'vacations/4' , name:"Autumn"},
    {link:'cart', name:"Open Cart"},
    {link:'admin', name:"Admin"},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
