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
    // find item by id in cart and increase quantity if found, else add item to cart
    let found = false;
    this.items.forEach((i) => {
      if (i.id === item.id) {
        i.quantity += item.quantity;
        found = true;
      }
    });
    if (!found)
      this.items.push(item);
  }

  // function to get items from cart
  getItems(): CartItem[] {
    return this.items;
  }

  //function to get total price of items in cart
  getTotal(): number {
    let total = 0;
    this.items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }

  //function to clear cart
  clearCart() {
    this.items = [];
    return this.items;
  }
}

// interface for cart item
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
