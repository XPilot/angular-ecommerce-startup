import { Injectable } from 'angular2/core';

@Injectable()
export default class CartService {
  private products:Array<Object> = [];

  addProduct(productId:number, productQuantity):void {
  }

  deleteProduct() {

  }
}
