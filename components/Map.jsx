import react, { useEffect, useState, useRef } from "react";
import mapboxgl from "!mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiZG9kZGUiLCJhIjoiY2xiZjRubG90MDJsYTNuczJyc2ZzcGp6ZyJ9.u3Hj2gtMVqd1_kDJ07_X4g";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lon, setLng] = useState(12.87194);
  const [lat, setLat] = useState(41.87194);
  const [zoom, setZoom] = useState(13);

  useEffect(() => {
    // initialize map only once
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lon, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lon.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  // useEffect(() => {
  //   if (!map.current) return; // wait for map to initialize
  //   map.current.on("load", () => {
  //     // when the map is loaded
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition((position) => {
  //         map.current.flyTo({
  //           center: [position.coords.longitude, position.coords.latitude],
  //         });
  //       });
  //     } else {
  //       console.log("Geolocation is not supported by this browser.");
  //     }
  //   });
  // });

  return (
    <div>
      <div className="sidebar">
        Longitude: {lon} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
