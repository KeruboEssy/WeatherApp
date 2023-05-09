import { Component } from '@angular/core';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent {
  weatherData: any;
  city: string = "Eldoret";
  option: string = 'temp';
  weatherData2: string;
  constructor(private weatherService: WeatherApiService) {}

  ngOnInit() {
    this.getForecast();
  }

  switchTabs(Data) {
    this.option = Data;
    // Changing view based on the selected tab
    const ages = [32, 33, 16, 40];
    const result = ages.filter(this.checkAdult);
  }


  checkAdult(age) {
    return age >= 18;
  }

  getForecast() {
    this.weatherService.geForecast(this.city).subscribe((data) => {
      this.weatherData = data.list;
      this.weatherData2 = JSON.stringify(data);
      console.log(this.weatherData); // log the data to the console
    });
  }
  
}

