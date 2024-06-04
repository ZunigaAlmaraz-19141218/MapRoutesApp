import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component'; // Import your MapComponent

const routes: Routes = [
  { path: 'map', component: MapComponent } // Define your route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configure RouterModule
  exports: [RouterModule] // Export RouterModule for other modules
})

export class AppRoutingModule { }

export const appRoutes = routes; // Exportar usando un nombre descriptivo

