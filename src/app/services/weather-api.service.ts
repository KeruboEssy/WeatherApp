import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/';
  private apiKey = 'b35012fe3ad6d69ae0988894c7b5f860';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const url =`${this.apiUrl}weather?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url);
  }

}
