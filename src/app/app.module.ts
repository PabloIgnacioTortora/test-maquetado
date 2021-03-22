import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingProviders, routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { EShopComponent } from './components/e-shop/e-shop.component';

//Material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsGridComponent,
    SideBarComponent,
    EShopComponent,
    FooterComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    routing,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
