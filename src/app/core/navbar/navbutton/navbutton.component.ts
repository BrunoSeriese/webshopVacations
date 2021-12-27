import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbutton',
  templateUrl: './navbutton.component.html',
  styleUrls: ['./navbutton.component.scss']
})
export class NavbuttonComponent implements OnInit {

  navbar_items = [
    {link:"/winter", name:"Winter"},
    {link:"/spring", name:"Spring"},
    {link:"/summer", name:"Summer"},
    {link:"/autumn", name:"Autumn"},
    {link:"/autumn", name:"Open Cart"},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
