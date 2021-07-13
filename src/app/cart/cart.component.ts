import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CartService } from '../cart.service';

// serve per ricevere i dati dal padre, esempio il product dall'altro component
import { Input } from '@angular/core';

// serve per mandare una informazione ad un altro compoonente
import { Output, EventEmitter } from '@angular/core';

// prendo un array da un ts, come se fosse un json

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  // il product non serve perchè lo tiriamo dal servizio
  constructor(private cartService: CartService) {}
  items = this.cartService.getItems();
  // items diventa un array di oggetti
  ngOnInit() {
    // console.log(this.items);
  }
}
