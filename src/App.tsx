import './App.css';
import SchemaOrg from './components/SchemaOrg';

function App() {
  // Фиксируем словацкий язык для передачи в поисковые системы
  const lang = 'sk';

  return (
    <>
      {/* Этот компонент передает данные о клинике в Пьештянах напрямую в Google */}
      <SchemaOrg lang={lang} />

      <div className="App">
        <header className="App-header">
          <h1>MUDr. Erkinbek Džamanbajev, PhD, MBA</h1>
          <p>
            <strong>Integratívna medicína • Piešťany • Rekreačná 2</strong>
          </p>
        </header>

        <main>
          <section className="intro">
            <p>Špecialista na liečbu chronickej bolesti a únavy.</p>
            <p>Konzultácie v Poliklinike Piešťany (Rekreačná 2) a online.</p>
          </section>

          <section className="actions" style={{ marginTop: '2rem' }}>
            <a 
              href="https://forms.gle/Gb6nj1SURsMk6G9c7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button"
            >
              Online diagnostický dotazník 6D
            </a>
          </section>
        </main>

        <footer style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#666' }}>
          <p>© 2026 Medicine of Coherence. Všetky práva vyhradené.</p>
        </footer >
      </div>
    </>
  );
}

export default App;
