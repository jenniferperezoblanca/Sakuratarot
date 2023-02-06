import React from "react";
import { useEffect, useState } from "react";
import Prueba from "./Prueba";
import '../App.css';
import Choosecards from "./Choosecards";

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards")
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
      });
  }, []);
  
  return (
    <div className="App">
      {cards.map((item) => (
        <React.Fragment>
          <Prueba item={item} name={item.spanishName} image={item.cardsReverse.sakuraReverse} />
        </React.Fragment>
      ))}
      {<Choosecards cards={cards} />}
    </div>
  );
}
export default Cards;