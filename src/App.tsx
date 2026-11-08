import { Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './i18n';

import { Home } from './pages/Home';
import { Publications } from './pages/Publications';
import { Privacy } from './pages/Privacy';
import { TopicPage } from './pages/TopicPage';
import { TOPIC_IDS, topicPath } from './content/slugs';
import { LANGS } from './i18n';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home lang="sk" />} />
      <Route path="/ru" element={<Home lang="ru" />} />
      <Route path="/en" element={<Home lang="en" />} />
      {TOPIC_IDS.flatMap((id) =>
        LANGS.map((lang) => (
          <Route key={`${id}-${lang}`} path={topicPath(id, lang)} element={<TopicPage id={id} lang={lang} />} />
        ))
      )}
      <Route path="/publications" element={<Publications />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <HelmetProvider>
      <AppRoutes />
    </HelmetProvider>
  );
}

export default App;
