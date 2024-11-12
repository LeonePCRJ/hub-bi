import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#005585', // Cor principal da SMTR
      light: '#0073b3',
      dark: '#003957',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      'Oswald',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '1.125rem', // 18px
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.5rem', // 24px
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '5px',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 4px 20px rgba(0, 85, 133, 0.2)',
          },
        },
      },
    },
  },
});