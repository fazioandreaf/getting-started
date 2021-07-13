import { Component, OnInit } from '@angular/core';
// gestione delle rotte
import { ActivatedRoute } from '@angular/router';
// importo sia i dati che l interfaccia
import { Product, products } from '../products';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  // inietto la rotta
  // ActivatedRoute is specific to each component that the Angular Router loads. ActivatedRoute contains information about the route and the route's parameters.

  // By injecting ActivatedRoute, you are configuring the component to use a service. The Managing Data step covers services in more detail.
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    // non sarebbe altro un oggetto che prendere i parametri passati dalla rotta,. anche se è un oggetto non possiamo accederci con la chiave e il punto. Rirorna in questo caso una stringa che poi trasformo in numero
    console.log(Number(routeParams.get('productId')));
    const id = Number(routeParams.get('productId'));
    // match. find è un metodo. Returns the value of the first element in the array where predicate is true, and undefined otherwise
    this.product = products.find((product) => product.id == id);
    // mi ritorna sempre un oggetto il quale lo aggiorno, prima avevo solo messo il tipo di dato
    console.log(this.product);
  }
}
