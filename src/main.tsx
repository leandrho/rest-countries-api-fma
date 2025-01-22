import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { CountriesProvider } from './contexts/CountriesContext';
import { CountriesRouter } from './router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CountriesProvider>
        <CountriesRouter />
    </CountriesProvider>
  </StrictMode>,
)
