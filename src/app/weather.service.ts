import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'b69db9725b3cbb82f837315bfd7d479c';
  constructor(private _http: HttpClient) {
  }
  wheater(city: string) {
    const params = new HttpParams().set('q', city).set('appid',this.apiKey);
    return this._http.get('https://api.openweathermap.org/data/2.5/weather', {
      params
    });
  }
}
