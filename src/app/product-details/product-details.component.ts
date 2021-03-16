import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from './../product-details.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails: any = [];
  prodName: string = '';
  constructor(protected productService: ProductDetailsService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.prodName = params.prodname;
    });
    /** fetch selected product details */
    this.productDetails = this.productService.getProductDetails(this.prodName);
  }
   /** function to add product to cart */
   addTocart(product: Object) {
    this.productService.addTocartList(product);
  }

}
