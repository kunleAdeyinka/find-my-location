import React from "react";
import { Card } from "react-bootstrap";

import { cardStyles } from "./componentStyles";

const HoverCard = ({ latitude, longitude }) => {
  return (
    <Card bg="primary" style={cardStyles}>
      <Card.Body>
        <Card.Title>Location Details</Card.Title>
        <Card.Text>
          Latitude: {latitude}, Longitude: {longitude}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HoverCard;
