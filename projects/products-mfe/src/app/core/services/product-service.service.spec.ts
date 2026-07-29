import { TestBed } from '@angular/core/testing';

import { ProductService } from './product-service.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ProductServiceService', () => {
  let service: ProductService;


  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [ProductService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
