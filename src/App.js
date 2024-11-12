import React, { useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme';
import SectorGrid from './components/sector-grid';
import BiDisplay from './components/bi-display';
import { sectorsData } from './data/sectors';
import './styles/App.css';

function App() {
  const [selectedSector, setSelectedSector] = useState(null);

  const handleSectorSelect = (sectorId) => {
    setSelectedSector(sectorId === selectedSector ? null : sectorId);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <a href="https://transportes.prefeitura.rio/" target="_blank" rel="noopener noreferrer">
            <img src="/images/RIOPREFEITURA_horizontal_branco.png" alt="Logo Prefeitura Rio" className="App-logo" />
          </a>
          <h1>Central de BI's</h1>
        </header>
        <main>
          <SectorGrid 
            setores={sectorsData} 
            selectedSector={selectedSector}
            onSectorSelect={handleSectorSelect}
          />
          {selectedSector && (
            <BiDisplay 
              bis={sectorsData.find(s => s.id === selectedSector).bis}
            />
          )}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;