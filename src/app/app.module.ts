import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarMenuComponent } from './app-navbar-menu/navbar-menu.component';
import { HomeCardContainerComponent } from './home-card-container/home-card-container.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductItemListComponent } from './product-item-list/product-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarMenuComponent,
    HomeCardContainerComponent,
    AppFooterComponent,
    ProductItemComponent,
    ProductItemListComponent
    ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
