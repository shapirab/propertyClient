import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appCurrencyInput]'
})
export class CurrencyInputDirective {

  constructor(private el: ElementRef, private control: NgControl) {
    console.log('currencyInputDirective called')
  }

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    // Allow only numbers, decimal point, and control keys
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'Home', 'End', 'ArrowLeft', 'ArrowRight', 'Clear', 'Copy', 'Paste'];
    if (allowedKeys.indexOf(event.key) !== -1 ||
        // Allow Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X, Ctrl+Z
        (event.key === 'a' && event.ctrlKey === true) ||
        (event.key === 'c' && event.ctrlKey === true) ||
        (event.key === 'v' && event.ctrlKey === true) ||
        (event.key === 'x' && event.ctrlKey === true) ||
        (event.key === 'z' && event.ctrlKey === true) ||
        // Allow numbers and one decimal point
        (event.key >= '0' && event.key <= '9') ||
        (event.key === '.' && this.el.nativeElement.value.indexOf('.') === -1)) {
      return;
    }
    event.preventDefault();
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value: string) {
    console.log('currencyInputDirective::OnFucus. value: ', value)
    // Remove formatting on focus
    const numericValue = value.replace(/[^0-9.-]+/g, '');
    this.el.nativeElement.value = numericValue;
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value: string) {
    console.log('currencyInputDirective::onBlur. value: ', value)
    // Apply currency formatting on blur
    const numericValue = parseFloat(value.replace(/[^0-9.-]+/g, ''));
    if (!isNaN(numericValue)) {
      this.control.control?.setValue(numericValue);
      this.el.nativeElement.value = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(numericValue);
    }
  }

}
