import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class GetCountries{
    constructor(private httpclient:HttpClient){}
        
        
    getCountries(): Observable<any>{
        return this.httpclient.get("https://countriesnow.space/api/v0.1/countries")
    }
}