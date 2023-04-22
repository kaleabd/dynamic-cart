import { useCardStore } from '../store/UseCardStore';
import './Navbar.css'
import {Link} from 'react-router-dom';


export const Navbar = () => {
    const {carts} =useCardStore()
    return(
        <div className='nav'>
            <h1>Congo-Shop</h1>
            <ul>
                <Link to="/" className='link'>Home</Link>
                <div className='cart-note'>
                    <Link to="/cart" className='link'>Cart</Link>
                    <div className='cart-counter'>{carts.length}</div>
                </div>
                <Link to="/contactus" className='link'>Contact Us</Link>
            </ul>
        </div>
    )
}