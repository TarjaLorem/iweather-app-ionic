import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weatherData$: Observable<any>;
  data = [];

  constructor(public navCtrl: NavController,
              private weatherProvider: WeatherProvider) {}

	ionViewDidLoad() {
    // this.getWeatherData();
    this.weatherData$ = this.weatherProvider.getWeatherApi('Lviv').pipe(
      map(({ main }: any) => main && Object.entries(main))
    ).subscribe(data => console.log(data));
  }

  // getWeatherData() {
  //   this.weatherProvider.getWeatherApi('Lviv').subscribe(data => console.log('DATA___', data));
  // }
}
