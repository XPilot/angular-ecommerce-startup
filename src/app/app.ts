import { Component } from 'angular2/core';
import { RouteConfig, Router, RouterOutlet } from 'angular2/router';

// routes import
import Routes from './app.routes';

import {Homepage} from './pages/';
import ProductItem from './components/product-item/product-item';

// scss styles
import 'assets/scss/main.scss';

@Component({
  selector: 'app',
  providers: [],
  directives: [RouterOutlet],
  template:
  `
    <div class="Layout">
      <router-outlet></router-outlet>
    </div>
  `
})

@RouteConfig([{
    path: '/',
    name: 'Homepage',
    component: Homepage,
    useAsDefault: true,
  }
])

export default class App {
  constructor() {}
}
