import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-sub-item',
  templateUrl: './menu-sub-item.component.html',
  styleUrls: ['./menu-sub-item.component.css']
})
export class MenuSubItemComponent implements OnInit {

  @Input()
  title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
