import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [
    {
      id: '1',
      name: 'CD',
      category: 'Storage',
      price: 100,
      quantity: 20
    },
    {
      id: '2',
      name: 'HD',
      category: 'Storage',
      price: 200,
      quantity: 15
    },
    {
      id: '3',
      name: 'SSD',
      category: 'Premium Storage',
      price: 500,
      quantity: 5
    }
  ];

  constructor() {

  }    

  ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

}
