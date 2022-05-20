import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input()
  menuItem :any = '';
  subItemsClosed = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSubItems(){
    this.subItemsClosed = !this.subItemsClosed;
  }
}
