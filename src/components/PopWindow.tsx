import { useState } from "react";
import { CardProps } from "./CardList";
import './PopWindow.css'

type Props = {
  cardProps: CardProps | null;
};

export const PopWindow = ({cardProps}: Props) => {
    const [selectedColor, setSelectedColor] = useState<string>('black')
    const [selectedBtn, setSelectedBtn] = useState(false)

    const handleColor = (color: string) => {
        setSelectedColor(color)
        setSelectedBtn(true)
    }
    return(
        <div className="module">
            <div className="module-container">
                <div className="color-options">
                    <button className="red"  onClick={() => handleColor("red")} style={{border: `${selectedBtn && selectedColor === "red" ? '' : 'none'}`}}></button>
                    <button className="blue" onClick={() => handleColor("blue")} style={{border: `${selectedBtn && selectedColor === "blue" ? '' : 'none'}`}}></button>
                </div>
                <div>
                    <h2 style={{color: `${selectedColor}`}}>title: {cardProps?.title}</h2>
                    <br />
                    <h2 style={{color: `${selectedColor}`}}>
                        desc: {cardProps?.description}
                    </h2>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}