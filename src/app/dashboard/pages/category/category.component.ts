import { Component } from '@angular/core';
import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  constructor(private global:GlobalService){}
  categoryName:any
  handleSubmit(){

    this.global.categories=JSON.parse(localStorage.getItem('categories') || '[]')
    console.log(this.global.categories)
    this.global.categories.push(this.categoryName)
    localStorage.setItem('categories',JSON.stringify(this.global.categories))
    console.log(this.global.categories)

  }
}
