import { Component } from '@angular/core';

import { CartService } from '../cart.service';
// convenient methods for generating controls.
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  // il product non serve perchè lo tiriamo dal servizio
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
  // items diventa un array di oggetti
  items = this.cartService.getItems();

  //  Construct a new FormGroup instance.
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  onSubmit(): void {
    // ritorn un array vuoto
    this.items = this.cartService.clearCart();
    // The current value of the control.
    console.warn('Your order has been submitted', this.checkoutForm.value);
    //Resets the FormGroup, marks all descendants pristine and untouched and sets the value of all descendants to null.
    this.checkoutForm.reset();
  }
}
