import React from 'react'


const Choosecards = ({cards}) => {

        const randomCards = cards.sort(() => Math.random() - 0.5); 
        const threeCards = randomCards.filter((card, index) => index < 3); console.log(threeCards)
        const PastCards = threeCards.filter((card, index) => index % 3 === 0);
        const PresentCards = threeCards.filter((card, index) => index % 3 === 1);
        const FutureCards = threeCards.filter((card, index) => index % 3 === 2);
          
  return (
    
      <div className='mostrartrescartas'>
            {PastCards.map((card) => (
              <div key={card.id}>
                <p>Past</p>
                <img src={card.sakuraCard} alt={card.name} className="global" />
                <p>{card.spanishName}</p>
                <h2>{card.meaning}</h2>
              </div>
            ))}
            {PresentCards.map((card) => (
              <div key={card.id}>
                <p>Present</p>
                <img src={card.sakuraCard} alt={card.name} className="global"/>
                <p>{card.spanishName}</p>
                <h2>{card.meaning}</h2>
              </div>
            ))}
            {FutureCards.map((card) => (
              <div key={card.id}>
                <p>Future</p>
                <img src={card.sakuraCard} alt={card.name} className="global"/>
                <p>{card.spanishName}</p>
                <h2>{card.meaning}</h2>
              </div>
            ))}
          </div>
    
  )
}

export default Choosecards