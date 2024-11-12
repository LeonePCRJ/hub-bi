import React from 'react';
import { Grid, Container } from '@mui/material';
import SectorCard from '../cards/sector-card';
import './styles.css';

const SectorGrid = ({ setores, selectedSector, onSectorSelect }) => {
  return (
    <Container maxWidth="lg" className="sector-grid">
      <Grid 
        container 
        spacing={2}
        justifyContent="center"
      >
        {setores.map((setor) => (
          <Grid 
            item 
            xs={6} 
            sm={4} 
            md={3}
            key={setor.id}
            className={`sector-grid-item ${selectedSector && selectedSector !== setor.id ? 'fade-out' : ''}`}
          >
            <SectorCard
              setor={setor}
              selected={selectedSector === setor.id}
              onClick={onSectorSelect}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SectorGrid;