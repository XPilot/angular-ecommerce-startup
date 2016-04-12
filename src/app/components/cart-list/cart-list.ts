// deps
import { Component, Input, Output, EventEmitter } from 'angular2/core';

// components
import InputQuantity from 'app/components/input-quantity/input-quantity';

// scss styles
import './cart-list.scss';

@Component({
  selector: 'cart-list',
  template: require('./cart-list.html'),
  providers: [],
  directives: [InputQuantity],
})

export default class CartList {
  @Input() cartProducts: Array<Object>;

  @Output() onProductUpdate = new EventEmitter();
  @Output() onProductDelete = new EventEmitter();

  constructor() {
  }

  onQuantityChange(id, quantity) {
    this.onProductUpdate.emit({
      id,
      quantity,
    });
  }

  onDelete(id) {
    this.onProductDelete.emit({id});
  }
}
