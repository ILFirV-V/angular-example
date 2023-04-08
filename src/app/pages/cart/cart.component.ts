import { Component } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../../interfasces/products";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items: Product[] = this.cartService.getItems();

  constructor(
    private cartService: CartService
  ) { }

}
