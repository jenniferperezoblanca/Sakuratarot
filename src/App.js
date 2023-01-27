import './App.css';
import React, { useState, useEffect } from 'react';

function sacarCartasAleatorias(inferior, superior) {
  var numPosibilidades = superior - inferior;
  var aleatorio = Math.random() * (numPosibilidades + 1);
  aleatorio = Math.floor(aleatorio);
  console.info(aleatorio);
  return inferior + aleatorio;
}
sacarCartasAleatorias(0, 55)



function App() {
const [cards, setCards] = useState([]);

useEffect(() => {
  fetch("https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/")
    .then(response => response.json())
    .then(cards => setCards(cards));
   // console.info(response.json())
}, []);

/* fetch("https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/10")
  .then((response) => {
    return response.json();
  })
  .then((recurso) => {
    console.log(recurso.cardsReverse);
  }); */


  return (
    <div className="App">
    <p>{`Numero de cartas: ${cards.reduce((acc) => acc + 1, 0)}`}</p>   
    {cards.map((card) => (
      <div key={card.id}>
       {<img src={card.cardsReverse.sakuraReverse} alt={card.name} />}
       {/* {<img src={card.clowCard} alt={card.name} />} */}
  
        <p>{card.spanishName}</p>
      </div>
    ))}
  </div>
  );
  }


export default App;


