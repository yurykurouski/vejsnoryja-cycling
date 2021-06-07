import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import './event-map.css';

const center = {
  lat: 53.68312602177623,
  lng: 23.83411884664919
};

export default function EventMap(props) {
  const { isDraggable, addMarker, updateMarker, markerData, mainClass } = props;

  return (
    <MapContainer
      className={`${ mainClass } map second-layer-card`}
      center={markerData || center}
      zoom={13}
      zoomControl={false}
      scrollWheelZoom
      whenReady={(map) => {
        if (addMarker) {
          map.target.on('click', (e) => {
            addMarker(e);
          });
        }
      }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markerData && <Marker
        position={markerData}
        draggable={isDraggable}
        eventHandlers={{
          dragend(e) {
            updateMarker(e);
          }
        }}
      />}
    </MapContainer>
  );
}
