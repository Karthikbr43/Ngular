import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
    private cart: CartService,
    private formBuider: FormBuilder,    /*Injecting FormBuilder*/
  ) { 
    this.items = this.cart.GetItems();
    this.checkoutForm = this.formBuider.group({
      name: '',
      address: ''
    })
  }
  ngOnInit() {
  }
  onSubmit(customerdata){
    // Process checkout data here 
    console.warn('Your Order has been submitted',customerdata);

    alert('Your Order has been placed successfully..');
    this.items=this.cart.ClearCart();
    this.checkoutForm.reset();
  }
}
