import './App.css';
import SchemaOrg from './components/SchemaOrg';
import HeroSection from './sections/HeroSection'; // восстанавливаем ваши блоки
import Services from './sections/Services';

function App() {
  return (
    <>
      <SchemaOrg lang="sk" />
      <div className="App">
        {/* Это вернет ваш дизайн и добавит адрес в Пьештянах */}
        <HeroSection />
        <main>
          <Services />
        </main>
        <footer>
          <p>© 2026 MUDr. Erkinbek Džamanbajev. Piešťany, Rekreačná 2.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
