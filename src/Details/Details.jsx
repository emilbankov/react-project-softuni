import './Details.module.css';

export default function Details() {
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
                            Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel's Spider-Man franchise for PS5. 

                            Swing, jump and utilize the new Web Wings to travel across Marvel's New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.
                        </span>
                    </div>
                </div>
                <div className="details-price-container">
                    <div className="details-price-box">
                        <span className="details-price">${dollars}<span className="details-superscript">,{cents}</span></span>
                        <button>Buy</button>
                    </div>
                    <div className="details-links">
                        <a href="#reviews"><img src="../images/review-bubble.png" alt="" /> Add review</a>
                    </div>
                </div>
            </div>
            <div id="reviews" className="reviews-section">
                <span className='reviews-title'>Reviews</span>
                <div className="review-item">
                    <div className="review-author">
                        milesmorales
                    </div>
                    <div className="review-text">
                        Amazing game! The story is so cool!!
                    </div>
                </div>
                <div className="review-item">
                    <div className="review-author">
                        spiderman
                    </div>
                    <div className="review-text">
                        Amazing game! The story is so cool!!
                    </div>
                </div>
                <div className="review-item">
                    <div className="review-author">
                        zaharibaharov
                    </div>
                    <div className="review-text">
                        Amazing game! The story is so cool!!
                    </div>
                </div>
                <div className="review-item">
                    <div className="review-author">
                        asenblatechki
                    </div>
                    <div className="review-text">
                        Amazing game! The story is so cool!!
                    </div>
                </div>
            </div>
        </div>
    );
}