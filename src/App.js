import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards")
      .then((response) => {
        return response.json();
      })
      .then((recurso) => {
        setCards(recurso.cardsReverse);
      });
  }, []);

  return (
    <div className="App">
      {cards.map((card) => (
        <div key={card.id}>
          <img src={card.image} alt={card.name} />
          <p>{card.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;


