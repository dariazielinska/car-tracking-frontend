import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';

const customIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const Map = ({ routeData }) => (
    <div className="map">
        <h2>Trasa samochodu</h2>
        <div className="map-container">
            <MapContainer center={routeData.length > 0 ? routeData[0] : [51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {routeData.map((coords, index) => (
                    <Marker key={index} position={coords} icon={customIcon}>
                        <Popup>
                            Lokalizacja {index + 1}
                        </Popup>
                    </Marker>
                ))}
                {routeData.length > 1 && (
                    <Polyline positions={routeData} color="blue" />
                )}
            </MapContainer>
        </div>
    </div>
);

export default Map;
