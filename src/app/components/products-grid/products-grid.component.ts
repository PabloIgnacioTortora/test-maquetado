import { Component, Injectable, OnInit } from '@angular/core';

export interface Producto {
  _id: string;
  model: string;
  image: string;
  name: string;
  precio: number;
}

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss'],
})
@Injectable()
export class ProductsGridComponent implements OnInit {
  productos: Producto[] = [
    {
      _id: '1245000',
      model: '1-XFK',
      image: '../../../assets/productos/zapatilla_1.jpg',
      name: 'Zapatilla',
      precio: 6000,
    },
    {
      _id: '5883',
      model: '2000-X',
      image: '../../../assets/productos/zapatilla_2.jpg',
      name: 'Zapatilla',
      precio: 7000,
    },
    {
      _id: '1656585067',
      model: '3 RUN',
      image: '../../../assets/productos/zapatilla_3.jpg',
      name: 'Zapatilla',
      precio: 3200,
    },
    {
      _id: '43543589067',
      model: '2000-X',
      image: '../../../assets/productos/zapatilla_2.jpg',
      name: 'Zapatilla',
      precio: 7000,
    },
    {
      _id: '1225467',
      model: '1-XFK',
      image: '../../../assets/productos/zapatilla_1.jpg',
      name: 'Zapatilla',
      precio: 6000,
    },
    {
      _id: '124542',
      model: '2000-X',
      image: '../../../assets/productos/zapatilla_2.jpg',
      name: 'Zapatilla',
      precio: 7000,
    },
    {
      _id: '123456',
      model: '3 RUN',
      image: '../../../assets/productos/zapatilla_3.jpg',
      name: 'Zapatilla',
      precio: 3200,
    },
    {
      _id: '67889067',
      model: '2000-X',
      image: '../../../assets/productos/zapatilla_2.jpg',
      name: 'Zapatilla',
      precio: 7000,
    },
    {
      _id: '12345667',
      model: '3 RUN',
      image: '../../../assets/productos/zapatilla_3.jpg',
      name: 'Zapatilla',
      precio: 3200,
    },
    {
      _id: '167',
      model: '2000-X',
      image: '../../../assets/productos/zapatilla_2.jpg',
      name: 'Zapatilla',
      precio: 7000,
    },
    {
      _id: '1',
      model: '1-XFK',
      image: '../../../assets/productos/zapatilla_1.jpg',
      name: 'Zapatilla',
      precio: 6000,
    },
    {
      _id: '123',
      model: '2000-X',
      image: '../../../assets/productos/zapatilla_2.jpg',
      name: 'Zapatilla',
      precio: 7000,
    },
    {
      _id: '788',
      model: '3 RUN',
      image: '../../../assets/productos/zapatilla_3.jpg',
      name: 'Zapatilla',
      precio: 3200,
    },
    {
      _id: '9067',
      model: '2000-X',
      image: '../../../assets/productos/zapatilla_2.jpg',
      name: 'Zapatilla',
      precio: 7000,
    },
    {
      _id: '67',
      model: '1-XFK',
      image: '../../../assets/productos/zapatilla_1.jpg',
      name: 'Zapatilla',
      precio: 6000,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}