
import React from 'react';
import { Card } from '@mui/material';

const AgendaCard = ({ name, time, location }) => {
  return (
    <Card className="agenda-card">
      <h3>{name}</h3>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Location:</strong> {location}</p>
    </Card>
  );
};

export default AgendaCard;