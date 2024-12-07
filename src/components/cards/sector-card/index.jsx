import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Tooltip } from '@mui/material';
import './styles.css';

const SectorCard = ({ setor, selected, onClick }) => {
  return (
    <Tooltip 
      title="Clique para ver os BI's" 
      arrow
      placement="top"
      enterDelay={500}
    >
        <Card 
        className={`sector-card ${selected ? 'selected' : ''}`}
        onClick={() => onClick(setor.id)}
        sx={{
            maxWidth: 200,
            cursor: 'pointer',
            height: '100%',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: 6,
            },
        }}
        >
        <Box sx={{ 
            height: 100, 
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#005585'
        }}>
            <CardMedia
            component="img"
            image={setor.imagem}
            alt={setor.nome}
            sx={{
                width: 'auto',
                height: 'auto',
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain'
            }}
            />
        </Box>
        <CardContent>
            <Typography 
            variant="h5" 
            component="div"
            sx={{
                fontFamily: 'Oswald, sans-serif',
                color: '#005585',
                fontWeight: 'bold',
                marginBottom: 1
            }}
            >
            {setor.sigla}
            </Typography>
            <Typography 
            variant="subtitle1"
            sx={{
                color: '#666',
                marginBottom: 2,
                fontSize: '0.9rem'
            }}
            >
            {setor.nome}
            </Typography>
            <Typography 
            variant="body2"
            sx={{
                color: '#444',
                fontSize: '0.85rem',
                lineHeight: 1.5
            }}
            >
            {setor.descricao}
            </Typography>
        </CardContent>
        </Card>
    </Tooltip>
  );
};

export default SectorCard;