import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from '../product-item';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
   
   @Input() productItem:ProductItem;

  constructor() { }

  ngOnInit() {
      
  }

}
