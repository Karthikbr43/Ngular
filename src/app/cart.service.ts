import { Injectable } from '@angular/core';
import { products } from '../app/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(
    private http: HttpClient
  ) { }

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
  GetShippingPrice() {
    return this.http.get('/assets/shipping.json');
  }
}
