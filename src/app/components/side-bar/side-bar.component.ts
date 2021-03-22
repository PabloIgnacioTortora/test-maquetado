import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

export interface Filtros {
  categoria: string;
  talle: number;
  color: string;
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  filtros: Filtros[] = [
    {
      categoria: 'Zapatillas',
      talle: 36,
      color: 'Amarillo',
    },
    {
      categoria: 'Zapatos',
      talle: 38,
      color: 'Negro',
    },
    {
      categoria: 'Botas',
      talle: 40,
      color: 'Verde',
    },
    {
      categoria: 'Sandalias',
      talle: 42,
      color: 'Azul',
    },
    {
      categoria: 'Pantuflas',
      talle: 44,
      color: 'Blanco',
    },
  ];
  constructor() {}

  showCategory() {
    console.log('clik');
    document.getElementById('categorys').classList.toggle('active');
  }

  showTalle() {
    console.log('clik');
    document.getElementById('talles').classList.toggle('active');
  }

  showColor() {
    console.log('clik');
    document.getElementById('colors').classList.toggle('active');
  }
}
