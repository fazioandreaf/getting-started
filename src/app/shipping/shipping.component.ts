import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CartService } from '../cart.service';

// serve per ricevere i dati dal padre, esempio il product dall'altro component
import { Input } from '@angular/core';

// serve per mandare una informazione ad un altro compoonente
import { Output, EventEmitter } from '@angular/core';

// prendo un array da un ts, come se fosse un json

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss'],
})
export class ShippingComponent implements OnInit {
  shippingCosts = this.cartService.getShippingPrices();
  constructor(private cartService: CartService) {}
  items = this.cartService.getItems();
  // items diventa un array di oggetti
  ngOnInit() {
    // setTimeout(() => console.log(this.shippingCosts), 1000);
    // console.log(this.items);
  }
}
