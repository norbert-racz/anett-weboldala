import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anett-kutyaiskolaja';

  menuIsClosed = true;

  toggleMenu() {
    this.menuIsClosed = !this.menuIsClosed;
    console.log(this.menuIsClosed);
  }
}
