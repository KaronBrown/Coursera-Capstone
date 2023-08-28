import jessica from './Components/Jessica.jpg'
import steve from './Components/Steve.jpg'
import john from './Components/John.jpg'
import jeny from './Components/Jeny.jpg'

function Reviews() {
    return (
        <div id="customer-reviews">
        <h1 style={{padding: "1em"}}>Customer Ratings</h1>
       <div className="review-wrapper">
        <div className="review">
            <div className="photo-name">
                <img className="review-photo" src={jessica} alt="a woman"></img>
                <h3 className="review-name">Jessica</h3>
            </div>
            <div className="customer-review">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                </p>
            </div>
            <div className="ratings">
                <h3>Rating</h3>
                <h3>10/10</h3>
            </div>
        </div>
        <div className="review">
            <div className="photo-name">
                <img className="review-photo" src={steve} alt="a man"></img>
                <h3 className="review-name">Steve</h3>
            </div>
            <div className="customer-review">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                </p>
            </div>
            <div className="ratings">
                <h3>Rating</h3>
                <h3>9/10</h3>
            </div>
        </div>
        <div className="review">
            <div className="photo-name">
                <img className="review-photo" src={john} alt="a man"></img>
                <h3 className="review-name">John</h3>
            </div>
            <div className="customer-review">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                </p>
            </div>
            <div className="ratings">
                <h3>Rating</h3>
                <h3>9/10</h3>
            </div>
        </div>
        <div className="review">
            <div className="photo-name">
                <img className="review-photo" src={jeny} alt="a woman"></img>
                <h3 className="review-name">Jeny</h3>
            </div>
            <div className="customer-review">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                </p>
            </div>
            <div className="ratings">
                <h3>Rating</h3>
                <h3>10/10</h3>
            </div>
        </div>
        </div>
       </div>
    )
}

export default Reviews;