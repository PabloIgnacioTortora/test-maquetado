import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EShopComponent } from './components/e-shop/e-shop.component';

const appRoutes: Routes = [
  { path: '', component: EShopComponent },
  { path: 'e-shop', component: EShopComponent },
  { path: '**', component: EShopComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);