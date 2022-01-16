import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbutton',
  templateUrl: './navbutton.component.html',
  styleUrls: ['./navbutton.component.scss']
})
export class NavbuttonComponent implements OnInit {

  navbar_items = [
    {link:1, name:"Winter"},
    {link:2, name:"Spring"},
    {link:3, name:"Summer"},
    {link:4 , name:"Autumn"},
    {link:"cart", name:"Open Cart"},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
