import { Directive, ElementRef } from 'angular2/core';


@Directive({
  selector: '.InputQuantity-DropDown',
  host: {
    '(click)': 'onClick($event)',
  }
})
export class InputQuantityDirective {
  private openClassName:string = 'InputQuantity-DropDown--open';
  public dropdownOpen:boolean = false;

  constructor(private elem: ElementRef) {
    this.onClickOutside = this.onClickOutside.bind(this);
  }

  onClick(event) {
    const currentClickTarget = event.target.className;
    this.onClickOutside();

    event.stopPropagation();
    event.preventDefault();

    if (currentClickTarget === 'InputQuantity-DropDownMenuItem') {
      return void(0);
    }

    this.dropdownOpen = this.dropdownOpen ? false : true;
    this.elem.nativeElement.classList[(
      this.dropdownOpen ? 'add':'remove'
    )](this.openClassName);

    if (this.dropdownOpen) {
      document.body.removeEventListener('click', this.onClickOutside);
      document.body.addEventListener('click', this.onClickOutside);
    }
  }

  onClickOutside() {
    const allDropdowns = document.getElementsByClassName(this.openClassName);
    this.dropdownOpen = false;

    for (let i = 0; i < allDropdowns.length; i++) {
      allDropdowns[i].classList.remove(this.openClassName);
    }

    document.body.removeEventListener('click', this.onClickOutside);
  }
}
