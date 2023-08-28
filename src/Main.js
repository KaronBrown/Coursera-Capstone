import greekSalad from './Components/Greek Salad.jpg'
import gyroMeal from './Components/Gyro Meal.jpg'
import baklava from './Components/baklava.jpg'

function Main() {
    return (
        <main id="main">
            <div className="main-header-button">
            <h1 className="featured-items">This Weeks Specials!</h1>
            <button className="button-online-menu">Online Menu</button>
            </div>
            <div className="main-wrapper">
                <div className="menu-item">
                    <img className="menu-image" src={greekSalad} alt="Greek Salad"></img>
                    <div className="item-price">
                        <h4>Greek Salad</h4>
                        <h4 className="price">$12.99</h4>
                    </div>
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    Cum sociis natoque penatibus et magnis
                    </p>
                </div>
                <div className="menu-item">
                    <img className="menu-image" src={gyroMeal} alt="gyro meal"></img>
                    <div className="item-price">
                        <h4>Gyro Meal</h4>
                        <h4 className="price">$15.99</h4>
                    </div>
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    Cum sociis natoque penatibus et magnis
                    </p>
                </div>
                <div className="menu-item">
                    <img className="menu-image" src={baklava} alt="baklava"></img>
                    <div className="item-price">
                        <h4>baklava</h4>
                        <h4 className="price">$5.99</h4>
                    </div>
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    Cum sociis natoque penatibus et magnis
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Main;