import { Injectable } from 'angular2/core';

@Injectable()
export default class CartService {
  private products:Array<any> = [];

  addProduct(product: any): Array<any> {
    if (product) {
      let newItemsArray;
      let existingItem = this.products
        .find(item => item.id === product.id);

      if (!existingItem) {
        newItemsArray = this.products.slice(0);
        newItemsArray.push({
          id: product.id,
          item: product,
          quantity: 1,
        });

        this.products = newItemsArray;
      } else {
        this.updateProduct(existingItem.id, existingItem.quantity + 1);
      }
    }

    return this.products;
  }

  updateProduct(id, quantity): Array<Object> {
    if (!id || !quantity) {
      return this.products;
    }

    const updatedProducts = this.products
      .slice(0)
      .map(item => {
        if (item.id === id) {
          item.quantity = quantity <= item.item.stock ? quantity : item.item.stock;
        }

        return item;
      });

    this.products = updatedProducts;

    return this.products;
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
