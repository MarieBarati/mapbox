import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import Utils from '../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class DataService {
data! : mapboxgl.AnySourceData;
layer! :mapboxgl.AnyLayer;
  constructor() { }

  setLayer(name: string): void {
      this.getDataSource(name);
      this.setDataLayer(name);
  }

  getDataSource(name: string): void {
    this.data = {
      type: 'geojson',
      data: {
        type: 'Feature',
          geometry: {
           type: name == 'point' ? 'Point' :  'Polygon' ,
           coordinates: name == 'point' ? Utils.point :  Utils.polygon ,
           },
           properties:{},
      }
    };
  }


  setDataLayer(name: string): void {
  this.layer = {
     id: name,
    type: name ==  'point' ? 'circle'  : 'fill',
    source: name,
    layout: {},
    paint:name == 'point' ? Utils.pointPaint :  Utils.polygonPaint
    };
  }
}
  
