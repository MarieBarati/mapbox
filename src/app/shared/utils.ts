import * as mapboxgl from 'mapbox-gl';

export default class Utils {
  static  point: number[] = [-77.03238901390978, 38.913188059745586 ];
  static  polygon: any = [[
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
                ]];
    static pointPaint: any = {
    'circle-stroke-color': '#000',
    'circle-stroke-width': 3,
    //'circle-color': 'pink',
    'circle-radius': {
      'base': 2,
      'stops': [
      [0, 14],
      [20, 14],
      ]
      },
    'circle-color': ['case',
            ['boolean', ['feature-state', 'hover'], false],
              '#b30059',
              'pink'
            ],
   };
  static polygonPaint: any = {
  'fill-color': 'pink',
  'fill-opacity': 0.5
 };
}

