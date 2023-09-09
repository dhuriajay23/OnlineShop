// Angular
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Project
import { Product } from '../models/product.model';
import { environment } from 'src/environments/environment';
import { ServiceResponse } from '../models/service-response.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<ServiceResponse> {
    return this.httpClient.get<ServiceResponse>(`${this.baseApiUrl}/api/Products/GetAllProducts`)
  }

  addProduct(product: Product): Observable<ServiceResponse> {
    return this.httpClient.post<ServiceResponse>(`${this.baseApiUrl}/api/Products`, product);
  }
}
