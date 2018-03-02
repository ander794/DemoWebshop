import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {
  isCollapsed = true;
  cartItem = 0;
  constructor() { }

  ngOnInit() {
  }
  
  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  addItemToCart(){
    this.cartItem ++;
  }
}
