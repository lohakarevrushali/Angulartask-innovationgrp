import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from './../product-details.service';

@Component({
  selector: 'app-shopping-cart',
  template: `<div class="row">
  <div class="col-md-6">
      <h2>Simple Fruit</h2>
  </div>
  <div class="col-md-6">
      <span class="pull-right">
          <h2>Basket Total:{{cartTotal|number : '1.2-2'|currency:'GBP'}}</h2>
      </span>
  </div>
</div>`,
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  constructor(protected productService: ProductDetailsService) { }
  cartTotal: any = 0;
  ngOnInit(): void {
    this.productService.getCartValue().subscribe(total => {
      this.cartTotal = total
    }
    );
  }

}
