// deps
import { Component, Input, Output, EventEmitter } from 'angular2/core';

// directives
import {InputQuantityDirective} from './input-quantity.directive';

// scss styles
import './input-quantity.scss';

@Component({
  selector: 'input-quantity',
  template: require('./input-quantity.html'),
  providers: [],
  directives: [InputQuantityDirective],
})

export default class InputQuantity {
  @Input() min: number = 0;
  @Input() max: number = 10;
  @Input() quantity: number = 0;

  @Output() change = new EventEmitter();

  private minMaxValues: Array<number> = [];

  constructor() {
  }

  // events
  ngOnInit() {
    const interval = this.max - this.min;
    for (let i:number = 0; i < interval; i++) {
      this.minMaxValues.push(this.max - i);
    }

    this.minMaxValues.reverse();
  }

  // methods
  add() {
    const quantity: number = this.quantity + 1 <= this.max ? this.quantity + 1 : this.quantity;
    this.change.emit(quantity);
  }

  substract() {
    const quantity: number = this.quantity - 1 >= this.min ? this.quantity - 1 : this.quantity;
    this.change.emit(quantity);
  }

  update(quantity: number) {
    this.change.emit(quantity);
  }
}
