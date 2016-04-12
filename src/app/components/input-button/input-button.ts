// deps
import { Component, Input, Output, EventEmitter } from 'angular2/core';

// scss styles
import './input-button.scss';

@Component({
  selector: 'input-button',
  template: require('./input-button.html'),
  providers: [],
  directives: [],
})

export default class InputQuantity {
  @Input() placeholder: string;
  @Input() maxLength: number = 16;
  @Input() button: string;

  @Output() onSubmit = new EventEmitter();

  private inputValue: string = '';

  constructor() {
  }

  // events
  onButtonPress() {
    const trimmedValue = this.inputValue.trim();

    if (trimmedValue.length > 0) {
      this.onSubmit.emit(trimmedValue);
    }
  }
}
