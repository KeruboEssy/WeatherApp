import { Routes } from "@angular/router"
import { WeatherComponent } from './pages/weather/weather.component';
import { HomeComponent } from "./pages/home/home.component";

export const allAppRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'other', component: WeatherComponent }
]; 