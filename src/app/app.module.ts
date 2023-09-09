// Angular
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

// Project
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsService } from './services/products.service';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    EditProductComponent,
    ProductsListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
