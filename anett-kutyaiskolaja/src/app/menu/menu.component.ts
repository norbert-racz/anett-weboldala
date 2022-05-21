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
        "Csoportos",
        "Egyéni"
      ]
    },{
      name: "Felnőtt kutya",
      subItems : [
        "Csoportos",
        "Egyéni"
      ]
    },{
      name: "Haladó kurzusok",
      subItems : [
        "Happility",
        "Szuperszimat I",
        "Szuperszimat II",
        "Szuperszimat III",
        "Trükkmester",
        "Jelenlét tudatos"
      ]
    },{
      name: "Tréning módszer",
      subItems : []
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
