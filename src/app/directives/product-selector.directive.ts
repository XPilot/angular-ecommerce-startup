import { Directive, ElementRef } from 'angular2/core';


@Directive({
  selector: '[product-selector]',
  host: {
    '(click)': 'onClick()',
  }
})
export default class ProductSelectorDirective {
  constructor(private elem: ElementRef) {
  }

  onClick() {
  }
}
