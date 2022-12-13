import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/Map.module.css";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZG9kZGUiLCJhIjoiY2xiZjRubG90MDJsYTNuczJyc2ZzcGp6ZyJ9.u3Hj2gtMVqd1_kDJ07_X4g";

export default function CityMap({ cities }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(12.87194);
  const [lat, setLat] = useState(41.87194);
  const [zoom, setZoom] = useState(5);

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
    if (!map.current) return;
    map.current.on("load", () => {
      cities.forEach((city) => {
        if (city.lon && city.lat) {
          new mapboxgl.Marker()
            .setLngLat([city.lon, city.lat])
            .addTo(map.current);
          map.current.flyTo({
            center: [10.9476, 43.37],
          });
        }
      });
    });
  });

  return (
    <>
      <div className={styles.sideBar}>
        Longitude:{lng}|Latitude:{lat}
      </div>
      <div ref={mapContainer} className={styles.mapContainer2} />
    </>
  );
}
