import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './i18n';

import { Home } from './pages/Home';
import { Publications } from './pages/Publications';

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
