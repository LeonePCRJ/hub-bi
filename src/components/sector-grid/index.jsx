import React, { useState, useEffect } from 'react';
import { Grid, Container, Card, Box, CardMedia, Typography, Tooltip, IconButton } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SectorCard from '../cards/sector-card';
import './styles.css';

const SectorGrid = ({ setores, selectedSector, onSectorSelect }) => {
  // Estados para controlar animações
  const [isReturning, setIsReturning] = useState(false);

  // Reseta o estado de retorno após a animação completar
  useEffect(() => {
    if (!selectedSector && isReturning) {
      const timer = setTimeout(() => {
        setIsReturning(false);
      }, 800); // Duração total das animações
      return () => clearTimeout(timer);
    }
  }, [selectedSector, isReturning]);

  // Renderiza o setor selecionado
  if (selectedSector) {
    const selectedSectorData = setores.find(setor => setor.id === selectedSector);

    return (
      <Container maxWidth="lg" className="sector-grid">
        <div className="selected-sector-container">
          <Grid container justifyContent="center">
            <Grid item xs={12} md={8}>
              <Tooltip title="Voltar para todos os setores" placement="bottom">
                <Card 
                  className="selected-sector-card"
                  onClick={() => {
                    setIsReturning(true);
                    onSectorSelect(null);
                  }}
                >
                  <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 24px',
                    backgroundColor: '#005585',
                    position: 'relative'
                  }}>
                    {/* Ícone de voltar */}
                    <IconButton 
                      sx={{ 
                        position: 'absolute',
                        left: '8px',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.1)'
                        }
                      }}
                    >
                      <KeyboardBackspaceIcon />
                    </IconButton>
                    
                    {/* Conteúdo do setor selecionado */}
                    <Box sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%'
                    }}>
                      <CardMedia
                        component="img"
                        image={selectedSectorData.imagem}
                        alt={selectedSectorData.nome}
                        sx={{
                          width: '40px',
                          height: '40px',
                          objectFit: 'contain',
                          marginRight: '16px'
                        }}
                      />
                      <Box>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            marginBottom: '4px'
                          }}
                        >
                          {selectedSectorData.sigla}
                        </Typography>
                        <Typography 
                          variant="subtitle2" 
                          sx={{ 
                            color: 'rgba(255,255,255,0.8)',
                            fontSize: '0.875rem'
                          }}
                        >
                          {selectedSectorData.nome}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Tooltip>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }

  // Renderiza o grid de setores
  return (
    <Container maxWidth="lg" className="sector-grid">
      <Grid 
        container 
        spacing={2}
        justifyContent="center"
      >
        {setores.map((setor, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            lg={3}
            key={setor.id}
            className={`sector-grid-item ${
              isReturning ? 'returning' : ''
            }`}
            style={{ '--item-index': index }}
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