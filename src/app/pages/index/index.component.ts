import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-index',
  standalone: false,
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  constructor(public global:GlobalService){}

  
  ngOnInit(){
    let cat=localStorage.getItem('categories')
    console.log('Data from localStorage:', cat); 
    if(cat){
      this.global.categories=JSON.parse(cat)
      console.log("cat",this.global.categories)
    }
    else {
      console.log('No data found in localStorage');
    }
  }

}
