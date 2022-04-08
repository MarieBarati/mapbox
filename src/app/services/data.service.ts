import { Injectable } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Point } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor() { }

  setLayer(name: string): void {
      this.getDataSource(name);
      this.setDataLayer(name);
  }
  setDataLayer(name: string) {
    throw new Error('Method not implemented.');
  }
  getDataSource(name: string): any {
    const data = {
      type: 'geojson',
      data: {
        type: 'Feature',
          geometry: {
           type: name,
           coordinates: name == 'point' ? DataSet.Point :  DataSet.Polygon , //[-77.03238901390978, 38.913188059745586 ]
           }
      }
    };
    return data;
  }



  getPointData(): any {
    const ponit = {
      type: 'geojson',
      data: {
        type: 'Feature',
          geometry: {
           type: 'Point',
           coordinates: [-77.03238901390978, 38.913188059745586 ]
           }
         }
    };
    return ponit;
  }


  getPolygonData(): any {
    const polygon = {
      type: 'geojson',
       data: {
          type: 'Feature',
          geometry: {
          type: 'Polygon',
            coordinates: [
              [
                [-67.13734, 45.13745],
                [-66.96466, 44.8097],
                [-68.03252, 44.3252],
                [-69.06, 43.98],
                [-70.11617, 43.68405],
                [-70.64573, 43.09008],
                [-70.75102, 43.08003],
                [-70.79761, 43.21973],
                [-70.98176, 43.36789],
                [-70.94416, 43.46633],
                [-71.08482, 45.30524],
                [-70.66002, 45.46022],
                [-70.30495, 45.91479],
                [-70.00014, 46.69317],
                [-69.23708, 47.44777],
                [-68.90478, 47.18479],
                [-68.2343, 47.35462],
                [-67.79035, 47.06624],
                [-67.79141, 45.70258],
                [-67.13734, 45.13745]
            ]
          ]
        }
      }
    };
    return polygon;
  }
}
