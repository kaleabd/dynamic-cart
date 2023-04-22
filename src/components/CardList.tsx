import { useState } from "react";
import './CardLits.css'
import { PopWindow } from "./PopWindow";

export type CardProps = {
  id: number,
  title: string,
  description: string
  image: React.ReactNode, // as this is svg files
  price: number,
}

type Props = {
  cards: CardProps[];
};

const CardList = ({ cards }: Props) => {
    const [showModule, setShowModule] = useState<boolean>(false)
    const [selectedCard, setSelectedCard] = useState<CardProps>({} as CardProps)


  const handleCardClick = (card: CardProps) => {
    setSelectedCard({
        id: card.id,
        title: card.title,
        description: card.description,
        image: card.image,
        price: card.price,
    })
    setShowModule(true);
  };

  const passToCart = () => {
    setShowModule(false)
  }

  return (
    <>
        <div className='main-container'>
            {cards.map((card) => (
                <div key={card.id}>
                  {card.image}
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <p>{card.price}$</p>
                  <button onClick={() => handleCardClick(card)}>Select Card</button>
                </div>
            ))}
        </div>
        {showModule && (
            <>
                <PopWindow cardProps={selectedCard} data={passToCart}/>
                <div className="overlay"></div>
                <button onClick={passToCart} className="close-btn">X</button>
            </>

        )}
        
        
    </>
   
  );
};

export default CardList;
