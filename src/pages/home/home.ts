import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public location: {
    city: string
  }

  constructor(public navCtrl: NavController,
              private weatherProvider: WeatherProvider) {
                this.outputResult();
              }

  outputResult() {
    console.log('outputResult___');
    this.location = {
      city: 'Lviv'
    }
    this.weatherProvider.getWeather(this.location.city).subscribe(el => console.log(el));
  }

}
