import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { theme } from './theme/theme';
import SectorGrid from './components/sector-grid';
import BiDisplay from './components/bi-display';
import { sectorsData } from './data/sectors';
import './styles/App.css';

function App() {
  const [selectedSector, setSelectedSector] = useState(null);

  const handleSectorSelect = (sectorId) => {
    // Adiciona uma pequena animação ao trocar de setor
    if (selectedSector && sectorId) {
      setSelectedSector(null);
      setTimeout(() => setSelectedSector(sectorId), 300);
    } else {
      setSelectedSector(sectorId);
    }
  };

  const selectedSectorData = selectedSector 
    ? sectorsData.find(s => s.id === selectedSector)
    : null;

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <a 
            href="https://transportes.prefeitura.rio/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="/images/RIOPREFEITURA_horizontal_branco.png" 
              alt="Logo Prefeitura Rio" 
              className="App-logo" 
            />
          </a>
          <h1>Central de Relatórios</h1>
        </header>
        
        <Box 
          sx={{ 
            minHeight: 'calc(100vh - 85px)',
            backgroundColor: '#f5f5f5'
          }}
        >
          <SectorGrid 
            setores={sectorsData} 
            selectedSector={selectedSector}
            onSectorSelect={handleSectorSelect}
          />
          
          {selectedSector && (
            <BiDisplay 
              bis={selectedSectorData.bis}
              sectorName={selectedSectorData.nome}
            />
          )}
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;