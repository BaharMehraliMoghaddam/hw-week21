import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import React from 'react';




const MapComponent = () => {
    const position = [35.79977, 51.50053]; 
  
    return (
      <MapContainer center={position} zoom={20} style={{ height: "500px", width: "500px" ,border:"solid #1E90FF 7px", borderRadius:"20px"}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            من اینجام !
          </Popup>
        </Marker>
      </MapContainer>
    );
  };
  
  export default MapComponent;