import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  template: `
    <nav>
      <div class="nav-wrapper purple">
        <a href="#" class="brand-logo center">Yolobrolo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#">temp</a></li>
          <li><a href="#">temp</a></li>
          <li><a href="#">temp</a></li>
        </ul>
      </div>
    </nav>
  <h1>Welcome to the yolobrolo angular 2 demo app!</h1>
  `
})
export class AppComponent {
  title = 'app works!';
}
