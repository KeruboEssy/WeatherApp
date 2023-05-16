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
  currentDate: string;
  currentData: string[];
  selectedDate: string;
  day: number;
  now: any;
  currentForecast: any;
  today: string;
  day2: string;
  day3: string;
  day4: string;
  day5: string;
  
  constructor(private weatherService: WeatherApiService) 
  {
    this.getDay();
    const weekday = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
    this.today = weekday[this.day];
    this.day2 = weekday[this.day+1];
    this.day3 = weekday[this.day+2];
    this.day4 = weekday[this.day+3];
    this.day5 = weekday[this.day+4];
  }

  getDay() {
    const date = new Date();
    let month:any = date.getMonth()+1;
    let day:any = date.getDate();
    if (day < 10) { day = '0' + day; }
    if (month < 10) { month = `0${month}`; }
    this.day = date.getDay();
    this.currentDate = `${date.getFullYear()}-${month}-${day}`;
    console.log(this.currentDate);
    this.selectedDate = this.currentDate;
  }

  ngOnInit() {
    this.getForecast();
  }

  switchTabs(Data) {
    this.option = Data;
    // Changing view based on the selected tab
  }


  getForecast() {
    this.weatherService.geForecast(this.city).subscribe((data) => {
      this.weatherData = data.list;
      this.weatherData2 = JSON.stringify(data);
      console.log(this.weatherData); // log the data to the console
      this.forecast();
    });
  }

  forecast() {
   this.getNewArray();
  }
  getNewArray() {
    let obj = this.weatherData;
    let date = this.selectedDate;  

    let newArray = obj.filter(function (el){
      return el.dt_txt.includes(date)
    });
    this.currentForecast = newArray;
    console.log("This is the new array", newArray);
  }

  //GETTING SELECTED DATA
  getSelectedData(date) {
    this.selectedDate = date;
    this.getNewArray();
  }
  
}

