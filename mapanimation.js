// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
    [-71.093729, 42.359244],
    [-71.094915, 42.360175],
    [-71.0958, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863],
];

// Personal access token from MapBox 
mapboxgl.accessToken =
    'pk.eyJ1IjoiZnMtc3R1ZGVudCIsImEiOiJjbDB5MHZtbWwwNml5M2psbXUwZTZpNm5lIn0.iu-Z_E01wnv9hRohTPZ5Jw';

//Created map object using mapboxgl.map() function
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14,
});

// Added a marker to the map that moves real-time
let marker = new mapboxgl.Marker().setLngLat([-71.092761, 42.357575]).addTo(map);

// Counter represents the index of the current bus stop
let counter = 0;

//setTimeout marker to move every 1000ms. Uses the function marker.setLngLat() to update the marker coordinates and counter to access bus stops in the array busStops.
function move() {
    setTimeout(() => {
        if (counter >= busStops.length) return;
        marker.setLngLat(busStops[counter]);
        counter++;
        move();
    }, 1000);
}