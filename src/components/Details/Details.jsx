import { useState } from 'react';
import './Details.module.css';

export default function Details() {
    const [title, setTitle] = useState('');
    const [review, setReview] = useState('');
    let price = "119,99";
    let [dollars, cents] = price.split(",");

    return (
        <div className="details-contaier">
            <div className="details-product">

                <div className="details-image">
                    <img src="https://m.media-amazon.com/images/I/81VGpLvXQuL._AC_UF1000,1000_QL80_.jpg" />
                </div>
                <div className="details">
                    <h1 className="details-title">Marvel's Spider-Man 2 (PS5)</h1>
                    <div className="details-list-content">
                        <ul className="details-list">
                            <li>
                                <strong>Genre:</strong>
                                <span>Action</span>
                            </li>

                            <li>
                                <strong>Developer:</strong>
                                <span>Insomniac Games</span>
                            </li>

                            <li>
                                <strong>Players:</strong>
                                <span>1</span>
                            </li>
                        </ul>
                    </div>
                    <div className="details-description">
                        <span>
                            Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel's Spider-Man franchise for PS5. Swing, jump and utilize the new Web Wings to travel across Marvel's New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.
                        </span>
                    </div>
                </div>
                <div className="details-price-container">
                    <div className="details-price-box">
                        <span className="details-price">${dollars}<span className="details-superscript">,{cents}</span></span>
                        <button>Buy</button>
                    </div>
                    <div className="details-links">
                        <a href="#add-review-title"><img src="../images/review-bubble.png" alt="" /> Add review</a>
                    </div>
                </div>
            </div>
            <div id="reviews" className="reviews-section">
                <span className='reviews-title'>Reviews</span>
                <div className="review-items">
                    <div className="review-item">
                        <div className="review-author">
                            <div className="author-banner">
                                M
                            </div>
                            <div className="author-username">
                                milesmorales
                            </div>
                        </div>
                        <div className="review-content">
                            <div className="review-title">
                                One of the best games
                            </div>
                            <div className="review-text">
                                Amazing game! The story is so cool!!
                            </div>
                        </div>
                    </div>
                    <div className="review-item">
                        <div className="review-author">
                            <div className="author-banner">
                                S
                            </div>
                            <div className="author-username">
                                spiderman
                            </div>
                        </div>
                        <div className="review-content">
                            <div className="review-title">
                                One of the best games
                            </div>
                            <div className="review-text">
                                Amazing game! The story is so cool!!
                            </div>
                        </div>
                    </div>
                    <div className="review-item">
                        <div className="review-author">
                            <div className="author-banner">
                                Z
                            </div>
                            <div className="author-username">
                                zaharibaharov
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
                    <div className="review-item">
                        <div className="review-author">
                            <div className="author-banner">
                                A
                            </div>
                            <div className="author-details">
                                <div className="author-username">
                                    asenblatechki
                                </div>
                            </div>
                        </div>
                        <div className="review-content">
                            <div className="review-title">
                                One of the best games
                            </div>
                            <div className="review-text">
                                Amazing game! The story is so cool!!
                            </div>
                        </div>
                    </div>
                </div>
                <div className="add-review">
                    <span className='add-review-title' id='add-review-title'>Add your review</span>

                    <form>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Enter review title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <label htmlFor="review">Review:</label>
                        <input
                            type="text"
                            id="review"
                            placeholder="Enter your review"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                        />

                        <button>Add Review</button>
                    </form>
                </div>
            </div>
        </div>
    );
}