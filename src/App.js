/* import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards")
      .then((response) => {
        return response.json();
      })
      .then((cards) => setCards(cards));
  }, []);


  return (
    <div className="App">
      {cards.map((card) => (
        <div key={card.id}>
          <img src={card.cardsReverse.sakuraReverse} alt={card.spanishName} />
          <p>{card.spanishName}</p>
        </div>
      ))}
    </div>
  );
      }

      

export default App; */




import './App.css';
import { useState, useEffect } from 'react';
function App() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards")
      .then((response) => {
        return response.json();
      })
      .then((cards) => setCards(cards));
  }, []);
  const randomCards = cards.sort(() => Math.random() - 0.5); // te crear la array de todo todo el mazo aleatorio
  const threeCards = randomCards.filter((card, index) => index < 3); // te crea de la array de mazo aleatorio
  //las 3 cartas aleatorias
  const PastCards = threeCards.filter((card, index) => index % 3 === 0); //filter te saca un boleano
  //true o false, te filtra las 3 cartas aleatorias si el resto del indice de da 0 , es presente. Si se cumple
  const PresentCards = threeCards.filter((card, index) => index % 3 === 1); // el indice cambia a 1, su resto es 1
  const FutureCards = threeCards.filter((card, index) => index % 3 === 2); //el indice cambia a 2, su resto es 2
  return (
    <div className="App">
      {PastCards.map((card) => (
        <div key={card.id}>
          <p>Past</p>
          <img src={card.cardsReverse.sakuraReverse} alt={card.name} />
          <p>{card.id}</p>
        </div>
      ))}
      {PresentCards.map((card) => (
        <div key={card.id}>
          <p>Present</p>
          <img src={card.cardsReverse.sakuraReverse} alt={card.name} />
          <p>{card.id}</p>
        </div>
      ))}
      {FutureCards.map((card) => (
        <div key={card.id}>
          <p>Future</p>
          <img src={card.cardsReverse.sakuraReverse} alt={card.name} />
          <p>{card.id}</p>
        </div>
      ))}
    </div>
  );
}
export default App;






