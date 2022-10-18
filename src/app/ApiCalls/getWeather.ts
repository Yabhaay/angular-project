import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class GetWeather{
    constructor(private httpclient:HttpClient){}
        
        
    getWeather(): Observable<any>{
        return this.httpclient.get(`https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById("country")?.innerText}&APPID=794ee95e63c5a32aaf88cd813fa2e425`)
    }
}