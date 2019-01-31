import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { WeatherData } from '../../providers/weather/weather.model';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  public city: string;
  public weatherData: WeatherData;
  public data;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private weatherProvider: WeatherProvider) {
  }

  ionViewDidLoad () {
    if (this.city) {
      this.saveForm();
      this.weatherData = this.getWeatherData(this.data);
      console.log(this.data);
    }
  }

  saveForm() {
    this.weatherProvider.getWeather(this.city).subscribe(res => {
      this.data = res;
    });
  }

  getWeatherData(data: any): WeatherData {
    const result: any = {};
    if (data) {
      console.log("data___", data);
      // const { name, humidity, pressure, temperature } = data;
      result.name = data.name;
      result.humidity = data.main.humidity;
      result.pressure = data.main.pressure;
      result.temperature = data.main.temp;
    }
    console.log("result___", result);

    return result;
  }

}
