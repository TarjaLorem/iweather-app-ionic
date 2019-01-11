import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class WeatherProvider {
  forecast: Observable<any>;
  API_KEY = '240f1238d82bd897c0ff0885ffe8b4f1';

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

  getWeather(city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},ua&appid=${this.API_KEY}`;
    return this.forecast = this.http.get(url)
    .pipe(map(r => r));
  }

}
