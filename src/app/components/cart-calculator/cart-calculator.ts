import { Component, Input } from 'angular2/core';

// scss styles
import './cart-calculator.scss';

@Component({
  selector: 'cart-calculator',
  template: require('./cart-calculator.html'),
  providers: [],
  directives: [],
})

export default class CartCalculator {
  @Input() cartProducts: Array<Object>;

  private oneOffTotal: number = 0;
  private monthlyTotal: number = 0;
  private subtotal: number = 0;
  private shipping: number = 0;
  private total: number = 0;

  constructor() {
    this.total = this.oneOffTotal + this.monthlyTotal + this.subtotal + this.shipping;
  }
}
