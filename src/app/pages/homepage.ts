import { Component } from 'angular2/core'

// components
import CartCalculator from 'app/components/cart-calculator/cart-calculator';
import CartList from 'app/components/cart-list/cart-list';
import ProductSelector from 'app/components/product-selector/product-selector';
import ProductItem from 'app/components/product-item/product-item';

// directives
import ProductSelectorDirective from 'app/directives/product-selector.directive';

// services
import CartService from 'app/services/cart.service';
import ProductService from 'app/services/product.service';

// styles
import './homepage.scss';

@Component({
  selector: 'homepage',
  directives: [
    CartCalculator,
    CartList,
    ProductItem,
    ProductSelector,
    ProductSelectorDirective
  ],
  providers: [CartService, ProductService],
  template: require('./homepage.html'),
})
export class Homepage {
  products: Array<Object>;
  cartProducts: any;
  activeProduct: number;

  constructor(
    public cartService: CartService,
    public productService: ProductService
  ) {
    this.products = productService.getProducts();
    this.activeProduct = productService.activeProduct;
    this.cartProducts = cartService.cartProducts;
  }

  setActiveProduct(id) {
    this.activeProduct = id;
  }

  addProduct(id) {
    this.cartProducts = this.cartService.addProduct(
      this.productService.getProductById(id)
    );
  }

  updateProductQuantity(product) {
    this.cartService.updateProduct(product.id, product.quantity);
  }

  deleteProduct(product) {
    this.cartProducts = this.cartService.deleteProduct(product.id);
  }
}
