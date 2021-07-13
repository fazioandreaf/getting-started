import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // serie di prodotti che hanno il tipo di product
  items: Product[] = [];
  constructor() {}
  addToCart(product: Product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    if (this.items.length != 0) this.items = [];
    return this.items;
  }
}
