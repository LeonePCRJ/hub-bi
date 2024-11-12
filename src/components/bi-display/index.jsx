import React from 'react';
import { Grid, Container } from '@mui/material';
import BiCard from '../cards/bi-card';
import './styles.css';

const BiDisplay = ({ bis }) => {
  return (
    <Container maxWidth="lg" className="bi-display">
      <Grid container spacing={3} justifyContent="center">
        {bis.map((bi) => (
          <Grid item xs={12} sm={6} md={4} key={bi.id}>
            <BiCard bi={bi} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BiDisplay;