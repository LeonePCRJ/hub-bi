import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import './styles.css';

const BiCard = ({ bi }) => {
  return (
    <Card 
      className="bi-card"
      component="a"
      href={bi.url}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={bi.imagem}
        alt={bi.nome}
      />
      <CardContent>
        <Typography 
          variant="h6"
          sx={{
            fontFamily: 'Oswald, sans-serif',
            color: '#005585',
            textTransform: 'uppercase',
            fontSize: '16px'
          }}
        >
          {bi.nome}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BiCard;