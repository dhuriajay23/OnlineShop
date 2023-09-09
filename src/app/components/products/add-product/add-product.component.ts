// Angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Project
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  addProductRequest: Product = {
    id: '00000000-0000-0000-0000-000000000000',
    name: '',
    category: '',
    price: 0,
    quantity: 0,
  }

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void { }

  addProduct() {
    this.productsService.addProduct(this.addProductRequest).subscribe({
      next: (product) => {
        var success = <Product>product.data;
        if (success) {
          this.router.navigate(['/products']);
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
