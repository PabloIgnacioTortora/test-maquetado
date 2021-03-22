import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EShopComponent } from './components/e-shop/e-shop.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const appRoutes: Routes = [
  { path: '', component: EShopComponent },
  { path: 'eshop', component: EShopComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: '**', component: EShopComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);