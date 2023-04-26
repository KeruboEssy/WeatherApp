import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  city: string = 'nairobi';
  weatherData: any;
  rain: any;
  day: any;

  public weatherSearchForm: FormGroup;

  constructor(private weatherapi: WeatherApiService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


    this.getWeather();

    const d = new Date();
    this.day = weekday[d.getDay()];

    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  searchWeather(city:any) {
    console.log(city);
    this.city = city.location;
    this.getWeather();
  }

  getWeather() {
    this.weatherapi.getWeather(this.city).subscribe((data) => {
      console.log(data)
      this.weatherData = data;
      this.rain = JSON.stringify(this.weatherData.rain)
    })
  }

}
