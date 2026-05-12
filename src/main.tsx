import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ThemeProvider } from '@mui/material/styles';

import App from './App';
import './index.css';

import theme from './theme/theme';
import { FavoritesProvider } from './context/FavoritesContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </ThemeProvider>
  </StrictMode>
);