import React from 'react';
import { Image } from 'react-bootstrap';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import logo from '../assets/logo.png';
import L from 'leaflet';
import loctionMarkerSVG from '../assets/location-sharp.svg';

let icon = L.icon({
  iconRetinaUrl: loctionMarkerSVG,
  iconUrl: loctionMarkerSVG,
  iconSize: 30,
});

const position = [6.857735, 79.893163];
function LocationComp({ height, width }) {
  console.log(height, width);
  return (
    <MapContainer
      center={position}
      zoom={16}
      style={{ height: `${height}`, width: `${width}` }}
      // dragging={false}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">2022PELAHolidays</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
        <Popup>
          <Image fluid width={80} height={80} src={logo}></Image>
          <h5>Pela Holiday</h5>
          <br /> Your travelling partner...
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default LocationComp;
