import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as gamesService from '../../services/gamesService.js';
import AddReview from './Add Review/AddReview.jsx';

export default function Details() {
    const [game, setGame] = useState({
        price: ""
    });
    const { gameId } = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        gamesService.getOne(gameId)
            .then(setGame);

        navigate(`/games/details/${gameId}`, { state: { gameId } })
    }, [navigate, gameId])

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
                    <div className="review-item">
                        <div className="review-author">
                            <div className="author-banner">
                                V
                            </div>
                            <div className="author-username">
                                venom
                            </div>
                        </div>
                        <div className="review-content">
                            <div className="review-title">
                                One of the best games
                            </div>
                            <div className="review-text">
                                Spider-Man 2 is an absolute thrill ride from start to finish! The web-swinging mechanics make traversing New York City a joy, and the dynamic duo of Peter Parker and Miles Morales adds depth to the storyline. The graphics are stunning, and the attention to detail in recreating Marvel's universe is impressive. Whether you're a fan of the comics or new to the Spider-Man world, this game delivers an unforgettable experience filled with action, emotion, and an abundance of web-slinging fun!
                            </div>
                        </div>
                    </div>
                </div>
                <AddReview />
            </div>
        </div>
    );
}