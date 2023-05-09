import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  city: string = 'Eldoret';
  weatherData: any;
  weatherData2: any;
  rain: any;
  day: any;
  precip: number  = 0;


  public weatherSearchForm: FormGroup;
  temp: number = 0;
  iconurl: string;

  constructor(private weatherapi: WeatherApiService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.getWeather();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d = new Date();
    this.day = weekday[d.getDay()];

    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });

    
  }
  calculateTemp(type) {
    if (type == "C") {
      this.temp = this.weatherData.main.temp-273.15;
    }
    else if (type == "F") {
      this.temp = (this.temp*1.8)+32;
    } 
  }

  searchWeather(city:any) {
    console.log(city);
    this.weatherData2 = null;
    this.city = city.location;
    this.getWeather();
  }

  getWeather() {
    this.weatherapi.getWeather(this.city).subscribe((data) => {
      console.log(data)
      const weatherData = data;
      this.weatherData2 = JSON.stringify(data);
      this.weatherData = weatherData;
      this.precip = weatherData?.rain?.['1h'] * 100;
      this.temp = this.weatherData.main.temp - 273.15;

      // displaying the icon
      var iconcode = weatherData.weather[0].icon;
      this.iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
      
      // console.log(this.weatherData?.weather[0].description)
      this.rain = JSON.stringify(this.weatherData.rain)
    })
  }

}
