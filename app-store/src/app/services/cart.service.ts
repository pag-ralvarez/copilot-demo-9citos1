import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  // array to hold items in cart
  items:CartItem[] = [];
  // function to add item to cart
  addToCart(item: CartItem) {
    this.items.push(item);
  }
}

// interface for cart item
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
