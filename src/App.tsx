import React from 'react';
import './App.css';
import SchemaOrg from './components/SchemaOrg';

function App() {
  return (
    <>
      {/* This adds the Piešťany address to Google's search robot */}
      <SchemaOrg lang="sk" />

      <div className="App">
        <header>
          <h1>MUDr. Erkinbek Džamanbajev</h1>
          <p>Integratívna medicína • Piešťany • Rekreačná 2</p>
        </header>
        <main>
          <p>6D diagnostika a online konzultácie</p>
          <a href="https://forms.gle/Gb6nj1SURsMk6G9c7" target="_blank" rel="noreferrer">
            Dotazník 6D (SK)
          </a>
        </main>
      </div>
    </>
  );
}

export default App;
