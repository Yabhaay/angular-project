import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { GetCountries } from './ApiCalls/getCountries';
import { countries } from './classes/countries';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _getCountries:GetCountries){}
  countries: countries[] | undefined;
  ngOnInit() {
    this._getCountries.getCountries()
      .subscribe(
        data=>{
          this.countries = data;
      }
    )
  }  

  title = 'my-first-project';
}
