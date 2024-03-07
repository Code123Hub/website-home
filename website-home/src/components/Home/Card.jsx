

// Card.js


import p1 from '../../assets/p1.jpeg'
import './Card.css';
import React from 'react';
import { Card, CardMedia } from '@mui/material';

const Cards = () => {
  return (
    <div className='card-container'>
      <Card className='div-card-div'>
        <CardMedia className='div-card1'
          component="img"
          // height="500"
          image={p1}
          alt="green iguana"
        />
      </Card>
      <Card className='div-card-div'>
        <CardMedia className='div-card1'
          component="img"
          // height="500"
          image={p1}
          alt="green iguana"
        />
      </Card>
      <Card className='div-card-div'>
        <CardMedia className='div-card1'
          component="img"
          // height="500"
          image={p1}
          alt="green iguana"
        />
      </Card>
    </div>
  );
};

export default Cards;