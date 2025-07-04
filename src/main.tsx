import { createRoot } from 'react-dom/client';
import './styles/index.css';
import './styles/tailwind.css';
import App from './App.tsx';
import Providers from './provider.tsx';

createRoot(document.getElementById('root')!).render(
  <Providers>
    <App />
  </Providers>
);
