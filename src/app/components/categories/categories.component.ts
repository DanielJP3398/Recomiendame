import { Component,ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  @ViewChild('tarjetasContainer') tarjetasContainer!: ElementRef;
  tarjetas = [
    {
      imagen: './assets/phone.png',
      titulo: 'Tecnología',
    },
    {
      imagen: './assets/hamburguesa.png',
      titulo: 'Comida',
    },
    {
      imagen: './assets/tools.png',
      titulo: 'Herramientas',
    },
    {
      imagen: './assets/coche.png',
      titulo: 'Vehículos',
    },
    {
      imagen: '../assets/hogar.png',
      titulo: 'Hogar',
    },
    {
      imagen: './assets/ropacate.png',
      titulo: 'Ropa',
    },
    {
      imagen: './assets/mas.png',
      titulo: 'Más',
    },
  ];


  moverCarrusel(direccion: 'izquierda' | 'derecha') {
    const tarjetasContainer = this.tarjetasContainer.nativeElement;
    const scrollAmount = 300; // Ajusta esta cantidad según el ancho de tus tarjetas

    if (direccion === 'izquierda') {
      tarjetasContainer.scrollLeft -= scrollAmount;
    } else {
      tarjetasContainer.scrollLeft += scrollAmount;
    }
  }
}
