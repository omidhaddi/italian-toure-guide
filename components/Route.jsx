
import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/Map.module.css";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
<<<<<<< HEAD
//import MapboxDirections from "@mapbox/mapbox-gl-directions";
=======
// import MapboxDirections from "mapbox-gl-directions";
// import * as MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
>>>>>>> main

mapboxgl.accessToken =
  "pk.eyJ1IjoiZG9kZGUiLCJhIjoiY2xiZjRubG90MDJsYTNuczJyc2ZzcGp6ZyJ9.u3Hj2gtMVqd1_kDJ07_X4g";

<<<<<<< HEAD
export default function Map({ places }) {
=======
export default function Map({places}) {
>>>>>>> main
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(12.87194);
  const [lat, setLat] = useState(41.87194);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return;
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("load", () => {
      // when the map is loaded
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          map.current.flyTo({
            center: [position.coords.longitude, position.coords.latitude],
          });
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    });
  });
  useEffect(() => {
    if (!map.current) return;
    map.current.on("load", () => {
      places.forEach((place) => {
        if (place.lon && place.lat) {
          new mapboxgl.Marker()
            .setLngLat([place.lon, place.lat])
            .addTo(map.current);
          map.current.flyTo({
            center: [place.lon, place.lat],
          });
        }
      });
<<<<<<< HEAD
    });
  });
  // const directions = new MapboxDirections({
  //   accessToken: mapboxgl.accessToken,
  //   unit: "metric",
  //   profile: "mapbox/driving",
  // });
  // map.current.addControl(directions, "top-left");
=======
      // const directions = new MapboxDirections({
      //   accessToken: mapboxgl.accessToken,
      //   unit: "metric",
      //   profile: "mapbox/driving",
      // });
      // map.current.addControl(directions, "top-left");
    });
  });

>>>>>>> main

  return (
    <>
      <div className={styles.sideBar}>
        Longitude:{lng}|Latitude:{lat}
      </div>
      <div ref={mapContainer} className={styles.mapContainer} />
    </>
  );
}
<<<<<<< HEAD
=======

// import React from 'react';
// import './App.css';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import MapboxDirections from '@mapbox/mapbox-gl-directions';
// import {
//   RulerControl,
//   StylesControl,
//   CompassControl,
//   ZoomControl,
// } from 'mapbox-gl-controls';
// import 'mapbox-gl-controls/lib/controls.css';

// mapboxgl.accessToken =
//   'pk.eyJ1IjoiYXlhYW56YXZlcmkiLCJhIjoiY2ttZHVwazJvMm95YzJvcXM3ZTdta21rZSJ9.WMpQsXd5ur2gP8kFjpBo8g';

// class App extends React.Component {
//   componentDidMount() {
//     const map = new mapboxgl.Map({
//       container: 'map',
//       style: 'mapbox://styles/mapbox/streets-v10',
//       center: [-73.985664, 40.748514],
//       zoom: 12,
//     });

//     const directions = new MapboxDirections({
//       accessToken: mapboxgl.accessToken,
//       unit: 'metric',
//       profile: 'mapbox/driving',
//     });

//     // Directions
//     map.addControl(directions, 'top-left');

//     // Ruler
//     map.addControl(new RulerControl(), 'top-right');
//     map.on('ruler.on', () => console.log('ruler: on'));
//     map.on('ruler.off', () => console.log('ruler: off'));

//     // Styles
//     map.addControl(new StylesControl(), 'bottom-left');

//     // Compass
//     map.addControl(new CompassControl(), 'top-right');

//     // Zoom
//     map.addControl(new ZoomControl(), 'top-right');
//   }
//   render() {
//     return <div className="mapWrapper" id="map" />;
//   }
// }
// export default App;
>>>>>>> main
