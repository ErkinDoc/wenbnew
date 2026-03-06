import React from 'react';
import './App.css';
import SchemaOrg from './components/SchemaOrg';

function App() {
  // Определяем язык (по умолчанию словацкий, раз вы в Пьештянах)
  const lang = 'sk';

  return (
    <div className="App">
      {/* Это главная строчка, которая передает ваши данные в Google */}
      <SchemaOrg lang={lang} />

      {/* Ниже идет ваш текущий сайт (замените этим текстом начало вашего return) */}
      <main>
        <h1>MUDr. Erkinbek Džamanbajev</h1>
        <p>Integratívna medicína a 6D diagnostika v Piešťanoch</p>
      </main>
    </div>
  );
}

export default App;
