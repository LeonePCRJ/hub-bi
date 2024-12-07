import React from 'react';
import { Card, CardContent, CardMedia, Typography, Tooltip } from '@mui/material';
import './styles.css';

const BiCard = ({ bi }) => {
  return (
    <Tooltip 
      title="Clique para abrir o dashboard"
      arrow
      placement="top"
      enterDelay={500}
    >
      <a 
        href={bi.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bi-card-link"
      >
        <Card className="bi-card">
          <div className="bi-card-image-container">
            <CardMedia
              component="img"
              image={bi.imagem}
              alt={bi.nome}
              className="bi-card-image"
            />
          </div>
          <CardContent className="bi-card-content">
            <Typography className="bi-card-title">
              {bi.nome}
            </Typography>
          </CardContent>
        </Card>
      </a>
    </Tooltip>
  );
};

export default BiCard;