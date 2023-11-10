import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../../services/cart.service';
import { ProductService, Product } from '../../services/product.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent {
  //constructor
  constructor(
    private cartService: CartService,
    private messageService: MessageService,
    private productService: ProductService
    ) { }

  products:Product[] = [];
  // variable to hold items in cart and keep it in sync with cart service
  cart:CartItem[] = this.cartService.getItems();
  // variable to hold total price of items in cart and keep it in sync with cart service
  total:number = this.cartService.getTotal();

  ngOnInit() {
    // get products from product service
    this.products = this.productService.getProducts();
  }

  //function to add item to cart
  addToCart(product: Product, quantity: number) {
    // create cart item
    let item: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity
    };
    // add item to cart
    this.cartService.addToCart(item);
    // update total price of items in cart
    this.updateTotal();
    // display a message
    this.messageService.add(`${item.name} agregado al carrito`);
  }

  // function to remove item from cart
  removeFromCart(item: CartItem) {
    // get index of item in cart
    let index = this.cart.indexOf(item);
    // remove item from cart
    this.cart.splice(index, 1);
    // update total price of items in cart
    this.updateTotal();
    // display a message
    this.messageService.add(`${item.name} removido del carrito`);
  }

  // function to update total price of items in cart
  updateTotal() {
    this.total = this.cartService.getTotal();
  }

  // function to buy items in cart
  buy() {
    // clear cart
    this.cart = this.cartService.clearCart();
    // update total price of items in cart
    this.updateTotal();
    // display a message
    this.messageService.add(`¡Compra realizada!`);
  }
}
