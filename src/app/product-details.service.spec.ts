import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ProductDetailsService } from './product-details.service';

const  productList = [{ name: 'apple', price: 0.75, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur' },
{ name: 'orange', price: 0.60, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitr' },
{ name: 'banana', price: 1.75, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' }];

const product = { name: 'orange', price: 0.60, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitr'};

describe('ProductDetailsService', () => {
  let service: ProductDetailsService;
  let httpTestingController: HttpTestingController;
  const singleProduct = 'orange';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('expects service to update basket total correctly', () => {
    const cartTotal = 0 ; 
    service.addTocartList(product);
    // Call the service method
    service.getCartValue().subscribe((total) => {
        // Set some expectations on the response
        expect(total).toBeDefined();
        expect(total).not.toBe(null);
        expect(total).toBe(cartTotal+product.price);
    });    
});
});
