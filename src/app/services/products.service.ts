// Angular
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Project
import { Product } from '../models/product.model';
import { environment } from 'src/environments/environment';
import { APIResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<APIResponse> {
    return this.httpClient.get<APIResponse>(`${this.baseApiUrl}/api/Products/GetAllProducts`)
  }

  addProduct(product: Product): Observable<APIResponse> {
    return this.httpClient.post<APIResponse>(`${this.baseApiUrl}/api/Products`, product);
  }

  getProduct(id: string): Observable<APIResponse> {
    return this.httpClient.get<APIResponse>(`${this.baseApiUrl}/api/Products/${id}`)
  }

  updateProduct(id: string, updatedProduct: Product): Observable<APIResponse> {
    return this.httpClient.put<APIResponse>(`${this.baseApiUrl}/api/Products/${id}`, updatedProduct)
  }

  deleteProduct(id: string): Observable<APIResponse> {
    return this.httpClient.delete<APIResponse>(`${this.baseApiUrl}/api/Products/${id}`)
  }
}
