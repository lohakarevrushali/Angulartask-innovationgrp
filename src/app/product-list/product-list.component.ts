import { Component, OnInit, Input } from '@angular/core';
import { ProductDetailsService } from './../product-details.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  productList: any = [];

  constructor(protected productService: ProductDetailsService) { }

  ngOnInit(): void {
    //get product list
    this.productList = this.productService.getProducts();

  }
  /** function to sort product on selection */
  sortProducts(sortby: string) {
    if (sortby === 'price') {
      this.productList.sort((a: any, b: any) => a.price.localeCompare(b.price));
    } else {
      this.productList.sort((a: any, b: any) => a.name.localeCompare(b.name));
    }
  }
  /** function to add product to cart */
  addTocart(product: Object) {
    this.productService.addTocartList(product);
  }

}
