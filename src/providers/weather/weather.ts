import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class WeatherProvider {
  API_KEY = '240f1238d82bd897c0ff0885ffe8b4f1';
  url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${this.API_KEY}`;
  result = [];

  constructor(public http: HttpClient) {
  }

  getWeather() {
    return this.http.get(this.url).subscribe(data => console.log('DATA___', data))
  }

}
