import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from './app.component';
import { WeatherComponent } from './pages/weather/weather.component';
import {RouterModule} from "@angular/router";
import {allAppRoutes} from './routes';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { ApixuService } from "./services/apixu.service";
import { HomeComponent } from './pages/home/home.component';
import { WeatherApiService } from './services/weather-api.service';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HomeComponent,
    WeatherForecastComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes), 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [WeatherApiService],
  bootstrap: [ AppComponent]
})
export class AppModule { }
