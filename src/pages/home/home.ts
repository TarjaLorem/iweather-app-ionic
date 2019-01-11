import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  location: {
    city: 'Lviv'
  }

  constructor(public navCtrl: NavController,
              private weatherProvider: WeatherProvider) {}

  outputResult() {
    this.weatherProvider.getWeather(this.location.city);
  }

}
