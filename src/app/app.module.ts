import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { HttpClientModule } from '@angular/common/http';
import { GetCountries } from './ApiCalls/getCountries';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GetWeather } from './ApiCalls/getWeather';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchbarComponent,
    FooterComponent,
    WeatherInfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    GetCountries,
    GetWeather
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
