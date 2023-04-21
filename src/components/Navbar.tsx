import { useCardStore } from '../store/UseCardStore';
import './Navbar.css'
import {Link} from 'react-router-dom';


export const Navbar = () => {
    const {carts} =useCardStore()
    return(
        <div className='nav'>
            <h1>Congo-Shop</h1>
            <ul>
                <li>Home</li>
                <div className='cart-note'>
                    <Link to="/cart">Cart</Link>
                    <div className='cart-counter'>{carts.length}</div>
                </div>
                
                <li>Contactus</li>
            </ul>
        </div>
    )
}