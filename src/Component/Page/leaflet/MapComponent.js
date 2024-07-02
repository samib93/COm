import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Markerblack from '../../../assets/img/marker-icon-2x-black.png';


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});


const blackIcon = new L.Icon({
  iconUrl: Markerblack, 
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  className: 'black-marker'
});

const RecenterAutomatically = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.setView(position, map.getZoom());
    }
  }, [position, map]);
  return null;
};

const generateRandomPosition = (position, radius) => {
  const y0 = position[0];
  const x0 = position[1];
  const rd = radius / 111300; 
  const u = Math.random();
  const v = Math.random();

  const w = rd * Math.sqrt(u);
  const t = 2 * Math.PI * v;
  const x = w * Math.cos(t);
  const y = w * Math.sin(t);

  const newLat = y + y0;
  const newLon = x + x0;

  return [newLat, newLon];
};

const MapComponent = () => {
  const [position, setPosition] = useState(null);
  const [randomMarkers, setRandomMarkers] = useState([]);

  useEffect(() => {
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
        },
        (err) => {
          console.error('Error getting location:', err);
        }
      );
    };

    getLocation();
  }, []);

  useEffect(() => {
    if (position) {
      const markers = [];
      for (let i = 0; i < 3; i++) {
        markers.push(generateRandomPosition(position, 10000)); 
      }
      setRandomMarkers(markers);
    }
  }, [position]);

  return (
    <MapContainer className='rounded-md ml-20 lg:ml-20' center={position || [51.505, -0.09]} zoom={10} style={{ height: '80vh', width: '65%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {position && (
        <>
          <RecenterAutomatically position={position} />
          <Marker position={position}>
            <Popup>Vous êtes ici</Popup>
          </Marker>
        </>
      )}
      {randomMarkers.map((markerPos, index) => (
        <Marker key={index} position={markerPos} icon={blackIcon}>
          <Popup>Producteur {index + 1}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
