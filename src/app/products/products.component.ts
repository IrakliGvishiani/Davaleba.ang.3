import { Component } from '@angular/core';
import { Product } from '../models/products';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-products',
  imports: [FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {


  products : Product = new Product


  prodArray : Product[] = []

  addToArr(){
    this.prodArray.push(this.products)
    console.log(this.prodArray)
    this.products = new Product
    
  }

}
