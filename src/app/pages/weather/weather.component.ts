import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city: string;
  result: any;
  constructor(private _ws: WeatherService) {
  }

  ngOnInit() {
  }
  clickWeather() {
    this._ws.wheater(this.city).subscribe( e => {
      this.result = e;
      console.log(e)
    });
  }

}
