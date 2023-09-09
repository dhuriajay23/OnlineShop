// Angular
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';

// Project
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  productDetails: Product = {
    id: '',
    name: '',
    category: '',
    price: 0,
    quantity: 0,
  };

  constructor(private route: ActivatedRoute, private producService: ProductsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.producService.getProduct(id).subscribe({
            next: (response) => {
              this.productDetails = <Product>response.data;
            }
          })
        }
      }
    })
  }
}
