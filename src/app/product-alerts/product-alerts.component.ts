import { Component, OnInit } from '@angular/core';

// serve per ricevere i dati , esempio il product dall'altro component
import { Input } from '@angular/core';

// serve per mandare una informazione ad un altro compoonente
import { Output, EventEmitter } from '@angular/core';

// prendo un array da un ts, come se fosse un json
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product;
  constructor() {}
  // A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive. Define an ngOnInit() method to handle any additional initialization tasks.
  ngOnInit() {
    //mettendo  il component nella product list dentro ngfor verrà invocato 3 volte, indipendentemente se ngif è vero o falso
    console.log('ngOnInit called');
  }
}
