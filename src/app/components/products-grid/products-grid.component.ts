import { Component, OnInit } from '@angular/core';

export interface Producto {
  model: string;
  image: string;
  name: string;
}


@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss'],
})
export class ProductsGridComponent implements OnInit {
  productos: Producto[] = [
    {
      model: '1-XFK',
      image: '../../../assets/productos/zapatilla_1.jpg',
      name: 'Zapatilla',
    },
    {
      model: '2000-X',
      image: '../../../assets/productos/zapatilla_2.jpg',
      name: 'Zapatilla',
    },
    {
      model: '3 RUN',
      image: '../../../assets/productos/zapatilla_3.jpg',
      name: 'Zapatilla',
    },
    {
      model: '2000-X',
      image: '../../../assets/productos/zapatilla_2.jpg',
      name: 'Zapatilla',
    },
    {
      model: '1-XFK',
      image: '../../../assets/productos/zapatilla_1.jpg',
      name: 'Zapatilla',
    },
    {
      model: '2000-X',
      image: '../../../assets/productos/zapatilla_2.jpg',
      name: 'Zapatilla',
    },
    {
      model: '3 RUN',
      image: '../../../assets/productos/zapatilla_3.jpg',
      name: 'Zapatilla',
    },
    {
      model: '2000-X',
      image: '../../../assets/productos/zapatilla_2.jpg',
      name: 'Zapatilla',
    },
    {
      model: '3 RUN',
      image: '../../../assets/productos/zapatilla_3.jpg',
      name: 'Zapatilla',
    },
    {
      model: '2000-X',
      image: '../../../assets/productos/zapatilla_2.jpg',
      name: 'Zapatilla',
    },
    {
      model: '1-XFK',
      image: '../../../assets/productos/zapatilla_1.jpg',
      name: 'Zapatilla',
    },
    {
      model: '2000-X',
      image: '../../../assets/productos/zapatilla_2.jpg',
      name: 'Zapatilla',
    },
    {
      model: '3 RUN',
      image: '../../../assets/productos/zapatilla_3.jpg',
      name: 'Zapatilla',
    },
    {
      model: '2000-X',
      image: '../../../assets/productos/zapatilla_2.jpg',
      name: 'Zapatilla',
    },
    {
      model: '1-XFK',
      image: '../../../assets/productos/zapatilla_1.jpg',
      name: 'Zapatilla',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
