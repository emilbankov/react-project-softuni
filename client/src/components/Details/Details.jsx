

import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as gamesService from '../../services/gamesService.js';
import * as reviewsService from '../../services/reviewsService.js';
import Review from './Review/Review.jsx';
import AuthContext from '../../contexts/AuthContext.jsx';
import useForm from '../../hooks/useForm.js';

export default function Details() {
    const navigate = useNavigate();
    const { accessToken, username, _id } = useContext(AuthContext);
    const isAuthenticated = !!accessToken;
    const [game, setGame] = useState({ price: "" });
    const [reviews, setReviews] = useState([]);
    const { gameId } = useParams();
    const [dollars, cents] = game.price.split(",");

    useEffect(() => {
        gamesService.getOne(gameId)
            .then((gameData) => {
                setGame(gameData);
            });

        reviewsService.getAll(gameId)
            .then(setReviews);

    }, [gameId]);

    const addReviewHandler = async (values) => {
        if (values.title === "" || values.review === "") {
            return;
        }

        const newReview = await reviewsService.create(
            gameId,
            values.title,
            values.review
        );

        setReviews(state => [...state, { ...newReview, owner: { username } }]);
        values.title = "";
        values.review = "";
    }

    const { values, onChange, onSubmit } = useForm(addReviewHandler, {
        title: "",
        review: ""
    });

    const deleteHandler = async () => {
        const hasConfirmed = window.confirm(`Are you sure you want to delete ${game.title}`);

        if (hasConfirmed) {
            await gamesService.deleteGame(gameId);

            navigate("/games/catalog");
        }
    }

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
                    </div>
                    {isAuthenticated && (
                        <div className="details-links">
                            <a href="#add-review-title"><img src="../../images/review-bubble.png" alt="" /> Add review</a>
                        </div>
                    )}

                    {_id === game._ownerId && (
                        <div className="buttons">
                            <Link to={`/games/edit/${gameId}`}><button className="edit">Edit</button></Link>
                            <button className="delete" onClick={deleteHandler}>Delete</button>
                        </div>
                    )}
                </div>
            </div>

            <div id="reviews" className="reviews-section">
                <span className='reviews-title'>Reviews</span>

                {reviews.length > 0 ?
                    (
                        <div className="review-items">
                            {reviews.map(review => (
                                <Review key={review._id} {...review} />
                            ))}
                        </div>
                    ) : (
                        <div className='no-reviews'>
                            <span className="reviews-title">There are no reviews added for this game yet.</span>
                        </div>
                    )
                }

                {isAuthenticated && (
                    <div className="add-review">
                        <span className='add-review-title' id='add-review-title'>Add your review</span>

                        <form onSubmit={onSubmit}>
                            <label htmlFor="title">Title:</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Enter review title"
                                value={values.title}
                                onChange={onChange}
                            />

                            <label htmlFor="review">Review:</label>
                            <input
                                type="text"
                                id="review"
                                name="review"
                                placeholder="Enter your review"
                                value={values.review}
                                onChange={onChange}
                            />
                            <button type="submit">Add Review</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
