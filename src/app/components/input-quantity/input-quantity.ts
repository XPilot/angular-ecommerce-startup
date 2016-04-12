// deps
import { Component, Input, Output, EventEmitter } from 'angular2/core';

// scss styles
import './input-quantity.scss';

@Component({
  selector: 'input-quantity',
  template: require('./input-quantity.html'),
  providers: [],
  directives: [],
})

export default class InputQuantity {
  @Input() min: number = 0;
  @Input() max: number = 10;
  @Input() quantity: number = 0;

  @Output() change = new EventEmitter();

  constructor() {
  }

  add() {
    const quantity = this.quantity + 1 <= this.max ? this.quantity + 1 : this.quantity;
    this.change.emit(quantity);
  }

  substract() {
    const quantity = this.quantity - 1 >= this.min ? this.quantity - 1 : this.quantity;
    this.change.emit(quantity);
  }
}
