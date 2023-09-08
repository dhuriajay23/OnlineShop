import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(
      {
        next: (products) => {
          this.products = <Product[]>products.data;
        },
        error: (response) => {
          console.log(response);
        }
      }
    )
  }

}
