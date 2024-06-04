import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;

  ngOnInit() {
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiMTkxNDEyMTgiLCJhIjoiY2x3aWxiajFrMGQ4bDJqbnIyc3U2dXh2dSJ9.F7-tPZXbjdg3GbCeDULKWg';    
      this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9,
      pitch: 45,
      bearing: -17.6
    });

    this.map.on('load', () => {
      this.map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
          'fill-extrusion-color': '#aaa',
          'fill-extrusion-height': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'height']
          ],
          'fill-extrusion-base': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'min_height']
          ],
          'fill-extrusion-opacity': 0.6
        }
      });

      this.map.addSource('zona', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'geometry': {
            'type': 'Polygon',
            'coordinates': [
              [
                [-100.406787, 20.595406],
                [-100.404548, 20.595660],
                [-100.403551, 20.593274],
                [-100.405609, 20.592403],
                [-100.406787, 20.595406]
              ]
            ]
          },
          'properties': {} // Añade una propiedad vacía si no necesitas ninguna información adicional
        }
      });
      
      this.map.addLayer({
        'id': 'zona',
        'type': 'fill',
        'source': 'zona',
        'layout': {},
        'paint': {
          'fill-color': '#ff0000',
          'fill-opacity': 0.3
        }
      });

      new mapboxgl.Marker({ color: 'green' })
        .setLngLat([-100.405979, 20.593216])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Inicio</h3>"))
        .addTo(this.map);

      new mapboxgl.Marker({ color: 'red' })
        .setLngLat([-100.405134, 20.595314])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Fin</h3>"))
        .addTo(this.map);
    });
  }

  calcularRuta() {
    if (this.map.getSource('ruta')) {
      this.map.removeLayer('ruta');
      this.map.removeSource('ruta');
    }

    this.map.addSource('ruta', {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [-100.405979, 20.593216],
            [-100.405079, 20.594878],
            [-100.405134, 20.595314]
          ]
        },
        'properties': {} // Añade una propiedad vacía si no necesitas ninguna información adicional
      }
    });    

    this.map.addLayer({
      'id': 'ruta',
      'type': 'line',
      'source': 'ruta',
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'paint': {
        'line-color': '#0000ff',
        'line-width': 4
      }
    });
  }
}
