import { Injectable } from '@angular/core';
import { products } from '../app/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor() { }

  AddToCart(product) {
    this.items.push(product);
  }
  GetItems() {
    return this.items;
  }
  ClearCart() {
    this.items = [];
    return this.items;
  }
}
