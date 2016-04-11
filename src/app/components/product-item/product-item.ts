import { Component, Input, Output, EventEmitter } from 'angular2/core';

// scss styles
import './product-item.scss';

@Component({
  selector: 'product-item',
  template: require('./product-item.html'),
  providers: [],
  directives: [],
})

export default class ProductItem {
  @Input() productId:number;
  @Input() productIsSelected:boolean;
  @Input() productIsTopSeller:boolean;
  @Input() productHeading:string;
  @Input() productList:Array<Object>;
  @Input() productMainFeatures:Array<string>;
  @Input() productSecondaryFeatures:Array<string>;
  @Input() productPrice:Object;

  @Output() onProductAdd = new EventEmitter();

  getPriceValue(value) {
    const valueSplit = value.toString().split('.');
    const stringValue = valueSplit.length > 1 ?
    `${valueSplit[0]},<sup>${valueSplit[1]}</sup>&euro;`
    :
    `${valueSplit[0]}&euro;`;

    return stringValue;
  }

  addProduct():void {
    this.onProductAdd.emit(null);
  }
}
