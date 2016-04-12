import { Injectable } from 'angular2/core';

@Injectable()
export default class CartService {
  private products:Array<any> = [];

  addProduct(product: any): Array<any> {
    if (product) {
      let newItemsArray;
      let itemExists = this.products
        .find(item => item.id === product.id);

      if (!itemExists) {
        newItemsArray = this.products.slice(0);
        newItemsArray.push({
          id: product.id,
          item: product,
          quantity: 1,
        });
      } else {
        newItemsArray = this.products
          .slice(0)
          .map(item => {
            if(item.id === product.id) {
              item.quantity = item.quantity + 1;
            }
            return item;
          });
      }

      this.products = newItemsArray;

      return newItemsArray;
    }
    return this.products;
  }

  updateProduct(id, quantity): Object {
    if (!id || !quantity) {
      return null;
    }

    const updatedProducts = this.products
      .slice(0)
      .map(item => {
        if (item.id === id) {
          item.quantity = quantity;
        }

        return item;
      });

    this.products = updatedProducts;

    return updatedProducts.find(item => item.id === id);
  }

  deleteProduct(id: number): Array<Object> {
    if (!id) {
      return this.products;
    }

    const remainingProducts = this.products
      .slice(0)
      .filter(item => item.id !== id);

    this.products = remainingProducts;

    return this.products;
  }

  get cartProducts():Array<any> {
    return this.products;
  }
}
