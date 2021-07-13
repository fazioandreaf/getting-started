import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

// serve per ricevere i dati dal padre, esempio il product dall'altro component
import { Input } from '@angular/core';

// serve per mandare una informazione ad un altro compoonente
import { Output, EventEmitter } from '@angular/core';

// prendo un array da un ts, come se fosse un json
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @Input() product!: Product;
  constructor() {}
  ngOnInit() {}
}
