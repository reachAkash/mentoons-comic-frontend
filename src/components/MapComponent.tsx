import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent: React.FC = () => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 40.712776,
    lng: -74.005974, // Coordinates for New York City
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
