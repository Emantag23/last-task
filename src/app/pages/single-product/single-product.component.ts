import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-single-product',
  standalone: false,
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {

  constructor(public global:GlobalService){}
  ngOnInit(){
    let pro=localStorage.getItem('products')
    console.log('Data from localStorage:', pro); 

    if(pro){
      this.global.products=JSON.parse(pro)
      console.log('after',this.global.products)
    }
  }
}
