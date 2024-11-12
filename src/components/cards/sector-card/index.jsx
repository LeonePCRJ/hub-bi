import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import './styles.css';

const SectorCard = ({ setor, selected, onClick }) => {
  return (
    <Card 
      className={`sector-card ${selected ? 'selected' : ''}`}
      onClick={() => onClick(setor.id)}
      sx={{
        maxWidth: 345,
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6,
        },
      }}
    >
      <CardContent>
        <Typography 
          variant="h6" 
          component="div"
          sx={{
            fontFamily: 'Oswald, sans-serif',
            color: '#005585',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
        >
          {setor.nome}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SectorCard;