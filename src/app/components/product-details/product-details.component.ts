import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsGridComponent } from '../products-grid/products-grid.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [ProductsGridComponent],
})
export class ProductDetailsComponent implements OnInit {
  public productoId;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private productos: ProductsGridComponent
  ) {}

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    console.log(id);
    this.getProduct(id);
    console.log(this.productoId);
  }

  getProduct(id) {
    let producto = this.productos.productos.filter(
      (productos) => productos._id === id
    );
    this.productoId = producto;
    return this.productoId;
  }

  goBack() {
    this._router.navigate(['/eshop']);
  }
}
