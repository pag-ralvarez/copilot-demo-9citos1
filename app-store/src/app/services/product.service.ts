import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { 
    // initialize products array and add products
    this.products = [
      {
        id: 1,
        name: 'Product 1',
        description: 'This is product 1',
        price: 100,
        imageUrl: 'https://picsum.photos/200'
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'This is product 2',
        price: 200,
        imageUrl: 'https://picsum.photos/200'
      },
      {
        id: 3,
        name: 'Product 3',
        description: 'This is product 3',
        price: 300,
        imageUrl: 'https://picsum.photos/200'
      },
      {
        id: 4,
        name: 'Product 4',
        description: 'This is product 4',
        price: 400,
        imageUrl: 'https://picsum.photos/200'
      },
      {
        id: 5,
        name: 'Product 5',
        description: 'This is product 5',
        price: 500,
        imageUrl: 'https://picsum.photos/200'
      }
    ];
  }
  
  // array to hold products
  products: Product[] = [];

  // function to get products
  getProducts(): Product[] {
    return this.products;
  }
}

// interface for product having id, name, description, price, imageUrl
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}
