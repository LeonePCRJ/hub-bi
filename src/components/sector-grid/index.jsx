import React from 'react';
import { Grid, Container } from '@mui/material';
import SectorCard from '../cards/sector-card';
import './styles.css';

const SectorGrid = ({ setores, selectedSector, onSectorSelect }) => {
  return (
    <Container maxWidth="lg" className="sector-grid">
      <Grid container spacing={3} justifyContent="center">
        {setores.map((setor) => (
          <Grid item xs={12} sm={6} md={4} key={setor.id}>
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