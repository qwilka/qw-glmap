import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import {NavigationControl} from 'maplibre-gl';

const map = new maplibregl.Map({
    container: 'map', // container id
    style: 'https://demotiles.maplibre.org/style.json', // style URL
    hash: true,
    center: [-7.3, 53.9], // starting position [lng, lat]
    zoom: 4 // starting zoom
});

let nav = new NavigationControl();
map.addControl(nav, 'top-right');

map.on('style.load', () => {
    map.setProjection({
        type: 'globe', // Set projection to globe
    });
});

