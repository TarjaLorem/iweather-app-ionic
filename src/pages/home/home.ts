import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public currentCity: string;
  public data: Object;

  constructor(public navCtrl: NavController,
              private weatherProvider: WeatherProvider) {
  }

  ionViewDidLoad () {
    this.saveForm();
  }

  saveForm() {
    if (this.currentCity) {
      this.weatherProvider.getWeather(this.currentCity).subscribe(res => {
        this.data = res;
        console.log(this.data);
      });
    }
  }
}

