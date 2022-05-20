import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems = [
    {
      name: "Főoldal",
      subItems : []
    },{
      name: "Kölyök kutya",
      subItems : [
        "opció 1",
        "opció 2"
      ]
    },{
      name: "Alap program",
      subItems : [
        "opció 1",
        "opció 2"
      ]
    },{
      name: "Haladó kurzusok",
      subItems : [
        "opció 1",
        "opció 2"
      ]
    },{
      name: "Tréning módszer",
      subItems : [
        "opció 1",
        "opció 2"
      ]
    },{
      name: "Referencia",
      subItems : []
    },{
      name: "Kapcsolat",
      subItems : []
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
