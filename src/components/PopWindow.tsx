import { useState } from "react";
import { CardProps } from "./CardList";
import './PopWindow.css'
import { useCardStore } from "../store/UseCardStore";

type Props = {
    cardProps: CardProps;
    data: () => void;
  };
  
  export const PopWindow = ({cardProps, data}: Props) => {
      const [selectedColor, setSelectedColor] = useState<string>('black')
      const [selectedBtn, setSelectedBtn] = useState(false)
      const {addCarts} =useCardStore()


      const handleColor = (color: string) => {
          setSelectedColor(color)
        setSelectedBtn(true)
    }
    const handleCart = () => {
        addCarts({
            id: cardProps.id,
            title: cardProps.title,
            description: cardProps.description,
            image: cardProps.image,
            price: cardProps.price,
        });
        data();
      };
      
      return(
        <div className="module">
            <div className="module-container">
                <div className="left-container">
                    <h2 className="title">{cardProps?.title}</h2>
                    {cardProps?.image}
                    <h2>Price <span className="title">{cardProps.price}$</span></h2>
                </div>
                <div className="right-containter">
                    <div>
                        <h2>Colors</h2>
                        <div className="color-options">
                            <button className="red"  onClick={() => handleColor("red")} style={{border: `${selectedBtn && selectedColor === "red" ? '' : 'none'}`}}></button>
                            <button className="blue" onClick={() => handleColor("blue")} style={{border: `${selectedBtn && selectedColor === "blue" ? '' : 'none'}`}}></button>
                        </div>
                    </div>
                    <div>
                        <h2>Sizes</h2>
                        <div className="size-btn">
                            <button>xl</button>
                            <button>lg</button>
                            <button>md</button>
                            <button>sm</button>
                        </div>
                    </div>
                    {/* <h2 style={{color: `${selectedColor}`}}>title: {cardProps?.title}</h2> */}
                    <button onClick={handleCart} className="addcart-btn">Add to cart</button>
                </div>
            </div>
        </div>
    )
}