import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as gamesService from '../../services/gamesService.js';
import * as reviewsService from '../../services/reviewsService.js';
import AddReview from './Add Review/AddReview.jsx';
import Review from './Review/Review.jsx';

export default function Details() {
    const [game, setGame] = useState({ price: "" });
    const [reviews, setReviews] = useState([]);
    const { gameId } = useParams();

    useEffect(() => {
        gamesService.getOne(gameId)
            .then(setGame);

        reviewsService.getAll()
            .then(setReviews)

    }, [gameId]);

    let [dollars, cents] = game.price.split(",");

    return (
        <div className="details-contaier">
            <div className="details-product">

                <div className="details-image">
                    <img src={game.imageUrl} />
                </div>
                <div className="details">
                    <h1 className="details-title">{game.title}</h1>
                    <div className="details-list-content">
                        <ul className="details-list">
                            <li>
                                <strong>Genre:</strong>
                                <span>{game.genre}</span>
                            </li>
                            <li>
                                <strong>Developer:</strong>
                                <span>{game.developer}</span>
                            </li>
                            <li>
                                <strong>Players:</strong>
                                <span>{game.players}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="details-description">
                        <span>
                            {game.description}
                        </span>
                    </div>
                </div>
                <div className="details-price-container">
                    <div className="details-price-box">
                        <span className="details-price">${dollars}<span className="details-superscript">,{cents}</span></span>
                        <button>Buy</button>
                    </div>
                    <div className="details-links">
                        <a href="#add-review-title"><img src="../../images/review-bubble.png" alt="" /> Add review</a>
                    </div>
                </div>
            </div>


            <div id="reviews" className="reviews-section">
                <span className='reviews-title'>Reviews</span>

                <div className="review-items">
                    {reviews.map(review => (
                        <Review key={review._id} {...review} />
                    ))}
                </div>

                <AddReview />
            </div>
        </div>
    );
}