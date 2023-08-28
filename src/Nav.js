import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import logo from './Components/Logo .svg'


const Nav = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);

    return(
        <nav className="navbar">
           <div className="navbar-image">
            <img src={logo} alt="Little Lemon Logo"></img>
           </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#main">Weekly Specials</a></li>
                <li><a href="#customer-reviews">Customer Reviews</a></li>
                <li><a href="#aboutUs">About</a></li>
                <li><a href="#reservation" className="bold">Book a Table</a></li>
                <li><a href="#" className="bold">Login</a></li>
            </ul>
    <div className="navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
        <div className="navbar-smallscreen-overlay">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay-close" onClick={() => setToggleMenu(false)} />
            <ul className="navbar-smallscreen-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#main">Weekly Specials</a></li>
                <li><a href="#customer-reviews">Customer Reviews</a></li>
                <li><a href="#aboutUs">About</a></li>
                <li><a href="#reservation">Book a Table</a></li>
                <li><a href="#">Log In</a></li>
            </ul>
        </div>
        )}

    </div>
        </nav>
    )
}

export default Nav;