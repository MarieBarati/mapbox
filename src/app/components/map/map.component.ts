import {Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { AnySourceData, Map as MapboxMap} from 'mapbox-gl';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild('map', { static: true }) mapElement!: ElementRef;
  public map!: MapboxMap;
  public polygonDataSource!: AnySourceData;
  public pointDataSource!: AnySourceData;
  style = 'mapbox://styles/mapbox/light-v10';
  lat = 37.75;
  lng = -122.41;

  constructor(private dataservice : DataService) { }


  ngOnInit() {
        this.map = new mapboxgl.Map({
        accessToken : environment.mapbox.accessToken,
        container: this.mapElement.nativeElement,
        style: this.style,
        zoom: 5, // starting zoom
        center: [-67.13734, 45.13745],
       });

        this.getPolygonLayer();
        this.getPointLayer();
        this.getMarkerInfo();
        this.getLayer();
}
  getLayer() {
    throw new Error('Method not implemented.');
  }

  getMarkerInfo(): void {
    const marker = new mapboxgl.Marker({
      color: 'red',
      draggable: true
      }).setLngLat([30.5, 50.5])
      .addTo(this.map);
  }

  getPointLayer(): void {
    this.pointDataSource = this.dataservice.getPointData();
    this.map.on('load', () => {
       this.map.addSource('points', this.pointDataSource );

       this.map.addLayer({
      id: 'circle',
      type: 'circle',
      source: 'points',
      paint: {
        'circle-stroke-color': '#000',
        'circle-stroke-width': 1,
        'circle-color': 'red',
        'circle-radius': 5
        }
      });
      },
      );
  }

  getPolygonLayer(): void {
    this.polygonDataSource =  this.dataservice.getPolygonData();
    this.map.on('load', () => {

      this.map.addSource('polygon', this.polygonDataSource);


      this.map.addLayer({
      id: 'polygon',
      type: 'fill',
      source: 'polygon',
      layout: {},
      paint: {
      'fill-color': '#0080ff',
      'fill-opacity': 0.5
      }
      });

      this.map.addLayer({
      id: 'outline',
      type: 'line',
      source: 'polygon',
      layout: {},
      paint: {
      'line-color': '#000',
      'line-width': 3
      }
    });
    });
  }

}
