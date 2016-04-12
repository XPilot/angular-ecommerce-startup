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
  @Input() cartProducts: Array<any>;

  private oneOffTotal: number = 0;
  private monthlyTotal: number = 0;
  private subtotal: number = 0;
  private shipping: number = 0;
  private total: number = 0;

  constructor() {
  }

  resetValues():void {
    this.oneOffTotal = 0;
    this.monthlyTotal = 0;
    this.subtotal = 0;
    this.shipping = 0;
    this.total = 0;
  }

  // events
  ngOnChanges() {
    this.resetValues();

    if (this.cartProducts && this.cartProducts.length) {
      this.cartProducts.map(product => {
        switch (product.item.price.type) {
          case 'one-off':
            this.oneOffTotal = Number((product.item.price.value * product.quantity).toFixed(2));
            break;
          case 'monthly':
            this.monthlyTotal = Number((product.item.price.value * product.quantity).toFixed(2));
            break;
          default:
        }
      });

      this.subtotal = this.oneOffTotal + this.monthlyTotal;
      this.total = this.subtotal + this.shipping;
    }
  }
}
