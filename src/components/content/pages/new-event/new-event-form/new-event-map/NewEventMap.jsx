import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import './new-event-map.css';

export default class NewEventMap extends Component {
  constructor() {
    super();

    this.state = {
      center: {
        lat: 53.6778,
        lng: 23.8294
      },
      zoom: 4,
      draggable: true,
      markerData: null
    }
  }

  addMarker = (event) => {
    const coords = event.latlng;
    this.setState({
      markerData: coords
    });
  };

  updateMarker = (event) => {
    const latLng = event.target.getLatLng();

    this.setState({
      markerData: latLng
    })
  };

  render() {
    const { center, markerData } = this.state;
    const { addMarker, updateMarker } = this;

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
          draggable={true}
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


