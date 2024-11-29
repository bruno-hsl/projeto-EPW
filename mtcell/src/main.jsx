import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Celulares from './produtos/celulares';
import Tablets from './produtos/tablets';
import Relogios from './produtos/relogios';
import CaixaSom from './produtos/caixa_de_som';
import PagamentoUM from './pages/PagamentoUM';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/celulares" element={<Celulares />} />
        <Route path="/tablets" element={<Tablets />} />
        <Route path="/relogios" element={<Relogios />} />
        <Route path="/produtos/caixa_de_som" element={<CaixaSom />} />
        <Route path="/pagamentoUM" element={<PagamentoUM />} />

      </Routes>
    </Router>
  </StrictMode>
);
