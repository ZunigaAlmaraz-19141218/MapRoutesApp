import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component'; // No incluyas la extensión .ts en la ruta de importación

@NgModule({
  declarations: [
    AppComponent,
    MapComponent, // Declare the component
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
