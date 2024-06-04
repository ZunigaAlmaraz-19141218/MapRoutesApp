// src/app/app.component.ts
import { Component } from '@angular/core';
import { MapComponent } from './map/map.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-mapbox-example';
}
