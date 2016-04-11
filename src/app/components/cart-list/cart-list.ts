import { Component, Input } from 'angular2/core';

// scss styles
import './cart-list.scss';

@Component({
  selector: 'cart-list',
  template: require('./cart-list.html'),
  providers: [],
  directives: [],
})

export default class CartList {
  @Input() cartProducts: Array<Object>;

  constructor() {
  }
}
