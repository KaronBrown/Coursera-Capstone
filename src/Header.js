import React from 'react';
import headerImage from'./Components/Mediterranean-Grilled-Chicken.jpg';

function Header() {
    return(
        <div className="header wrapper padding" id="home">
            <div className="wrapper-info">
                <h1>Little Lemon Resturaunt</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                </p>
                <a href="#reservation"><button className="table-reserve-button">Reserve a Table</button></a>

            </div>

            <div className="header-image">
                <img src={headerImage} alt="grilled chicken dish"></img>

            </div>
        </div>
    )
}

export default Header;