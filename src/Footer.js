import whiteLogo from './Components/Little Lemon logo white.png'

function Footer() {
    return(
        <footer className="footer-wrapper">
            <div className="footer-logo">
                <img src={whiteLogo} alt="Little Lemon Logo"></img>
            </div>
            <div className="footer-contact-us">
                <h4>Contact Us</h4>
                <ul>
                    <li><strong>Phone:</strong><br></br>999-888-0000</li>
                    <li><strong>Email:</strong><br></br>Littlelemon@email.com</li>
                    <li><strong>Address:</strong><br></br>1234 Wallaby Way <br></br> Chicago, IL 99383</li>
                </ul>

            </div>
            <div className="footer-nav">
                <h4>Navigation</h4>
                <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#main">Featured Items</a></li>
                <li><a href="#customer-reviews">Customer Reviews</a></li>
                <li><a href="#aboutUs">About</a></li>
                <li><a href="#resevation">Book a Table</a></li>
                <li><a href="#">Log In</a></li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer;