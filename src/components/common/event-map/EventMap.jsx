import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import './event-map.css';

export default class EventMap extends Component {
  constructor() {
    super();

    this.state = {
      center: {
        lat: 53.6778,
        lng: 23.8294
      },
    }
  }

  render() {
    const { center } = this.state;
    const { isDraggable, addMarker, updateMarker, markerData } = this.props;

    return (
      <MapContainer
        className="new-event__map second-layer-card"
        center={center}
        zoom={13}
        scrollWheelZoom={true}
        whenReady={(map) => {
          map.target.on("click", function (e) {
            addMarker(e);
          });
        }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
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
    )
  }
}


