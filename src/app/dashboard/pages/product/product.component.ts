import { Component } from '@angular/core';
import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private global:GlobalService){}

  arr:any=[]
  product={
    categoryName:'',
    productName:'',
    price:''
  }

  handleSubmit(){
    this.arr.push(Object.assign({},this.product))
    console.log(this.arr)

    this.global.products=JSON.parse(localStorage.getItem('products') || '[]')
    console.log('bef',this.global.products)

    this.global.products.push(...this.arr)
    localStorage.setItem('products',JSON.stringify(this.global.products))
    console.log('aft',this.global.products)
  }
}
