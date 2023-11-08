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
    // display a message
    this.messageService.add(`${item.name} added to cart`);
  }
}
