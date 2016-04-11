import { Injectable } from 'angular2/core';

@Injectable()
export default class CartService {
  private products:Array<any> = [];

  addProduct(product: any): Array<any> {
    if (product) {
      let itemExists = this.products
        .find(item => item.id === product.id);

      if (!itemExists) {
        this.products.push({
          id: product.id,
          item: product,
          quantity: 1,
        });
      } else {
        this.products = this.products
          .slice(0)
          .map(item => {
            if(item.id === product.id) {
              item.quantity = item.quantity + 1;
            }
            return item;
          });
      }
      return this.products;
    }
    return [];
  }

  deleteProduct() {
  }

  get cartProducts():Array<any> {
    return this.products;
  }
}
