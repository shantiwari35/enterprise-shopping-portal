import { TestBed } from '@angular/core/testing';

import { ProductService } from './product-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductServiceService', () => {
  let service: ProductService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ProductService]
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
