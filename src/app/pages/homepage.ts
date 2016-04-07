import { Component } from 'angular2/core'

// components
import ProductSelector from 'app/components/product-selector/product-selector';
import ProductItem from 'app/components/product-item/product-item';

// directives
import ProductSelectorDirective from 'app/directives/product-selector.directive';

// services
import CartService from 'app/services/cart.service';
import ProductService from 'app/services/product.service';

@Component({
  selector: 'homepage',
  directives: [
    ProductItem,
    ProductSelector,
    ProductSelectorDirective
  ],
  providers: [ProductService],
  template: require('./homepage.html'),
})
export class Homepage {
  products: Array<Object>;
  activeProduct: number;

  constructor(productService: ProductService) {
    this.products = productService.getProducts();
    this.activeProduct = productService.activeProduct;
  }

  setActiveProduct(id) {
    this.activeProduct = id;
  }

  addProduct(id, quantity) {
  }
}
