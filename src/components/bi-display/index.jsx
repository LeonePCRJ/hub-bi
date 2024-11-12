import React from 'react';
import { Grid, Container, Typography, Box } from '@mui/material';
import BiCard from '../cards/bi-card';
import './styles.css';

const BiDisplay = ({ bis, sectorName }) => {
  return (
    <div className="bi-display">
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h5" 
            sx={{ 
              fontFamily: 'Oswald, sans-serif',
              color: '#005585',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '8px'
            }}
          >
            Dashboards Disponíveis
          </Typography>
        </Box>
        
        <Grid 
          container 
          spacing={3} 
          justifyContent="center"
        >
          {bis.map((bi) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              key={bi.id}
              className="bi-grid-item"
            >
              <BiCard bi={bi} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default BiDisplay;