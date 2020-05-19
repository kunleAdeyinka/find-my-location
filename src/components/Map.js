import React, { useState } from "react";
import GoogleMap from "google-map-react";
import { Button } from "react-bootstrap";

import Marker from "./Marker";
import {
  DEFAULT_LATITUDE,
  DEFAULT_LONGITUDE,
  DEFAULT_ZOOM,
  DETAILED_ZOOM
} from "../utils/Constants";

import { mapStyle, buttonStyle } from "./componentStyles";

const Map = () => {
  const [latitude, setLatitude] = useState(DEFAULT_LATITUDE);
  const [longitude, setLongitude] = useState(DEFAULT_LONGITUDE);
  const [magnification, setMagnification] = useState(DEFAULT_ZOOM);

  const findCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      alert("Geolocation is not supported by this browser!");
    }
  };

  const getCoordinates = position => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    setMagnification(DETAILED_ZOOM);
  };

  return (
    <div style={mapStyle}>
      <Button
        variant="danger"
        style={buttonStyle}
        onClick={findCurrentLocation}
      >
        Find Me
      </Button>
      <GoogleMap center={[latitude, longitude]} zoom={magnification}>
        <Marker
          lat={latitude}
          lng={longitude}
          text="Here"
          tooltip="A very long address"
        />
      </GoogleMap>
    </div>
  );
};

export default Map;
