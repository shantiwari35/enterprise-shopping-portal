import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/products-mfe/src/environments/environment';
import { API_ENDPOINTS } from '../constants/end-points.contant';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly apiUrl = environment.apiUrl;
  private readonly endPoint = API_ENDPOINTS['product-list'];
  constructor(private http: HttpClient) {}


  getAllProducts(limit: number, offset: number) {
    return this.http.get(`${this.apiUrl}${this.endPoint}`, {
      params: { limit: limit, offset: offset },
    });
  }
}
