import React from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const App: React.FC = () => {
  const coordinates = [
    [41.2995, 69.2401], // Toshkent
    [55.7558, 37.6176], // Moskva
  ];

  return (
    <div>
      <MapContainer
        center={[48.5278, 31.5021]}
        zoom={4}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polyline positions={coordinates} color="blue" />
      </MapContainer>
    </div>
  );
};

export default App;
