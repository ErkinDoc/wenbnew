import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './i18n';

import { Home } from './pages/Home';
import { Publications } from './pages/Publications';
import { Privacy } from './pages/Privacy';

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/gdpr" element={<Privacy />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
