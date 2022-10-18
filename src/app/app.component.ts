import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { GetCountries } from './ApiCalls/getCountries';
import { GetWeather } from './ApiCalls/getWeather';
import { countries } from './classes/countries';
import { weather } from './classes/weather';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _getCountries: GetCountries, _getWeather: GetWeather) { };
  countries: countries[] | undefined;
  weather: weather[] | undefined;
  ngOnInit() {
    this._getCountries.getCountries()
      .subscribe(
        data=>{
          this.countries = data;
      }
    )
    // this._getWeather.getWeather()
    //   .subscribe(
    //     data=>{
    //       this.weather = data;
    //   }
    // )
  }  

  title = 'my-first-project';
}
