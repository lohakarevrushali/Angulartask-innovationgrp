import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ProductDetailsService {
  productList = [{ name: 'apple', price: 0.75, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur' },
  { name: 'orange', price: 0.60, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitr' },
  { name: 'banana', price: 1.75, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' }];

  cartProductList: any = [];
  total = 0;
  simpleObservable = new Subject();
  simpleObservable$ = this.simpleObservable.asObservable();
  constructor() { }
  /** function to get productlist  */
  getProducts() {
    return this.productList;
  }
  /** function to get product details  */
  getProductDetails(prodName: string) {
    return this.productList.find(({ name }) => name === prodName);
  }
  /** function to add product to cart  */
  addTocartList(product: Object) {
    this.cartProductList.push(product);
    this.getCartValue();
  }
  /** function to update cart total  */
  getCartValue() {
    this.total = this.cartProductList.reduce((total: number, product: any) => total + product.price, 0);
    this.simpleObservable.next(this.total);
    return this.simpleObservable$;
  }
}
