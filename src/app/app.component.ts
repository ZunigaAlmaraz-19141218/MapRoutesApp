// src/app/app.component.ts

import { Component } from '@angular/core';
import { MapComponent } from './map/map.component'; // Importar componente Mapa
import { RouterOutlet } from '@angular/router'; // Importar RouterOutlet
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { Router } from '@angular/router'; // Importar Router
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule

@Component({
  selector: 'app-root', // Selector del componente
  standalone: true, // Declarar como componente independiente
  templateUrl: './app.component.html', // Ruta a la plantilla HTML
  styleUrls: ['./app.component.css'] // Ruta a los estilos CSS
})
export class AppComponent {
  constructor(
    private router: Router, // Inyectar Router
  ) {}

  title = 'Ejemplo de Angular Mapbox'; // Título de la aplicación

  navegarMap() {
    this.router.navigate(['/map']); // Navegar a la ruta '/map'
  }
}
