import {Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import{AnyLayer, AnySourceData, Map as MapboxMap} from 'mapbox-gl';
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
  public layer!: mapboxgl.AnyLayer;
   dataSource!:  {id : string , data : mapboxgl.AnySourceData};
  style = 'mapbox://styles/mapbox/light-v10';
  lat = 37.75;
  lng = -122.41;

  constructor(private dataservice : DataService) { }


  ngOnInit(): void {
    
        this.map = new mapboxgl.Map({
        accessToken : environment.mapbox.accessToken,
        container: this.mapElement.nativeElement,
        style: this.style,
        zoom: 5, // starting zoom
        center: [-67.13734, 45.13745],
       });
      
      this.getMarkerInfo();
      this.getLayer();    
}


  getLayer() {
 this.dataservice.dataEmiter.subscribe((res)=> {
        this.dataSource = res;
        if(this.map.getSource(this.dataSource.id) == undefined)
        this.map.addSource(this.dataSource.id, this.dataSource.data as AnySourceData );
      });
   
      this.dataservice.layerEmiter.subscribe((res: AnyLayer) => {
        this.layer = res;
        if(this.map.getLayer(this.dataSource.id) == undefined)
        this.map.addLayer(this.layer );
      });  

      this.map.on('mousemove', 'point', () => {
        this.map.setFeatureState({source: 'point', id: 1}, { hover: true});
        });
 
        this.map.on("mouseleave", 'point', () => {
          this.map.setFeatureState({source: 'point', id: 1}, { hover: false});
        });
      
         
}

  getMarkerInfo(): void {
    const marker = new mapboxgl.Marker({
      color: 'red',
      draggable: true
      }).setLngLat([30.5, 50.5])
      .addTo(this.map);
  }

}

