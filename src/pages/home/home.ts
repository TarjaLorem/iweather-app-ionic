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
  public temp;

  constructor(public navCtrl: NavController,
              private weatherProvider: WeatherProvider) {}

	ionViewDidLoad() {
    // this.getWeatherData();
    this.weatherData$ = this.weatherProvider.getWeatherApi('Lviv').pipe(
      map(({ main }: any) => {
        this.temp = main;
        return this.temp;
      })
    )

    // this.weatherData$.subscribe(data => {
    //   this.temp = data;
    //   console.log(this.temp);
    // });
  }

  // getWeatherData() {
  //   this.weatherProvider.getWeatherApi('Lviv').subscribe(data => console.log('DATA___', data));
  // }
}
