import React, { useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const MapContainer = () => {
  const mapStyles = {
    height: '80vh',
    width: '80%'
  };

  const defaultCenter = {
    lat: 28.338888358864985,
    lng: 79.42532762437301
  };

  const locations = [
    {
      name: 'Location 1',
      location: {
        lat: 41.3954,
        lng: 2.162
      }
    }
  ];

  useEffect(() => {
    console.log('Key: ', process.env.REACT_APP_GOOGLE_MAP_API_KEY);
  }, []);

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY ?? ''}
    >
      <GoogleMap mapContainerStyle={mapStyles} zoom={18} center={defaultCenter}>
        <Marker key={locations[0].name} position={locations[0].location} />
      </GoogleMap>
    </LoadScript>
  );
};
export default MapContainer;
