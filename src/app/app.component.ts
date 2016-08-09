import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app-root',
  directives: [ ROUTER_DIRECTIVES ],
  styleUrls: ['app.component.css'],
  template: `
    <nav>
      <div class="nav-wrapper purple">
        <a href="#" class="brand-logo center">Yolobrolo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a routerLink="/featured">Featured</a></li>
          <li><a routerLink="/about">About</a></li>
          <li><a routerLink="/videos">Videos</a></li>
        </ul>
      </div>
    </nav>
  <h1>Welcome to the yolobrolo angular 2 demo app!</h1>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'app works!';
}
