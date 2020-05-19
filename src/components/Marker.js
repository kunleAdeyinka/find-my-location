import React, { useState } from "react";

import Card from "./HoverCard";

import { circleMarkerStyle } from "./componentStyles";

const Marker = ({ text, lat, lng }) => {
  const [visible, setVisible] = useState(false);

  const handleMouseOver = () => {
    setVisible(true);
  };

  const handleMouseOut = () => {
    setVisible(false);
  };

  return (
    <div
      style={circleMarkerStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {visible ? <Card latitude={lat} longitude={lng} /> : null}
    </div>
  );
};

export default Marker;
