import { Component, Input } from 'angular2/core';

// scss styles
import './product-selector.scss';

@Component({
  selector: 'product-selector',
  template: require('./product-selector.html'),
  providers: [],
  directives: [],
})

export default class ProductSelector {
  @Input() productId:number;
  @Input() productHeading:string;
  @Input() productValue:number;

  constructor() {
  }

  getProductValue(value) {
    return value.toString().replace('.', ',');
  }
}
