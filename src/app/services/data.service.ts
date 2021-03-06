import { EventEmitter, Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Observable } from 'rxjs/internal/Observable';
import Utils from '../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private dataSource! : {id : string , data : mapboxgl.AnySourceData};
private layer! : mapboxgl.AnyLayer;
dataEmiter: EventEmitter<any> = new EventEmitter<any>();
layerEmiter: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }
  
  setLayer(name: string): void {
      this.setDataSource(name);
      this.setDataLayer(name);
  }


  setDataSource(name: string): void {
    this.dataSource= {
      id : name,
      data: {
      type: 'geojson',
      data: {
        type: 'Feature',
        id : 1,
          geometry: {
           type: name == 'point' ? 'Point' :  'Polygon' ,
           coordinates: name == 'point' ? Utils.point :  Utils.polygon ,
           },
           properties:{},
      }
     }
    };
    this.dataEmiter.emit(this.dataSource);

  }


  setDataLayer(name: string): void {
  this.layer = {
     id: name,
    type: name ==  'point' ? 'circle'  : 'fill',
    source: name,
    layout: {},
    paint:name == 'point' ? Utils.pointPaint :  Utils.polygonPaint
    };
    this.layerEmiter.emit(this.layer);
  }

}
  
