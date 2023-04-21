import './Navbar.css'
import {Link} from 'react-router-dom';

export const Navbar = () => {
    return(
        <div className='nav'>
            <h1>Congo-Shop</h1>
            <ul>
                <li>Home</li>
                <Link to="/cart">Cart</Link>
                <li>Contactus</li>
            </ul>
        </div>
    )
}