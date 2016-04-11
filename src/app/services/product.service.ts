import { Injectable } from 'angular2/core';

// mock data right here
const productData = require('mockData.json');

@Injectable()
export default class ProductService {
  private selectedProduct:number;

  getProducts():Array<Object> {
    return productData; //empty array for the time being
  }

  getProductById(id):Object {
    const item = productData
      .filter(item => item.id === id)
      .slice(0);

    if (!item.length) {
      return null;
    }

    return item[0];
  }

  get activeProduct() {
    return this.selectedProduct || 1;
  }

  set activeProduct(id) {
    this.selectedProduct = id;
  }
}
