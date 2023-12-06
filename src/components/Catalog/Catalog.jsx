import { Link } from "react-router-dom"
import Search from "../Search/Search.jsx";

export default function Catalog() {
    let price = "119,99";
    let [dollars, cents] = price.split(",");

    return (
        <>
            <div class="catalog-header">
                <h1>Welcome to Our Games Catalog</h1>
                <p>"Unlock Your Gaming Universe: Explore Infinite Pixels, Where Every Game is a Masterpiece!"</p>
            </div>

            <Search />

            <div className="grid-container">
                <Link to={'/games/details'}>
                    <div className="card-container">
                        <div className="card-image-container">
                            <img src="https://m.media-amazon.com/images/I/81VGpLvXQuL._AC_UF1000,1000_QL80_.jpg" alt="Card" className="card-image" />
                        </div>
                        <span>
                            <span className="card-title">Marvel's Spider-Man 2 (PS5)</span>
                            <span className="card-genre">Genre: Action</span>
                            <span className="card-price">${dollars}<span className="card-superscript">,{cents}</span></span>
                        </span>
                    </div>
                </Link>

                <Link to={'/games/details'}>
                    <div className="card-container">
                        <div className="card-image-container">
                            <img src="https://m.media-amazon.com/images/I/81VGpLvXQuL._AC_UF1000,1000_QL80_.jpg" alt="Card" className="card-image" />
                        </div>
                        <span>
                            <span className="card-title">Marvel's Spider-Man 2 (PS5)</span>
                            <span className="card-genre">Genre: Action</span>
                            <span className="card-price">${dollars}<span className="card-superscript">,{cents}</span></span>
                        </span>
                    </div>
                </Link>

                <Link to={'/games/details'}>
                    <div className="card-container">
                        <div className="card-image-container">
                            <img src="https://m.media-amazon.com/images/I/81VGpLvXQuL._AC_UF1000,1000_QL80_.jpg" alt="Card" className="card-image" />
                        </div>
                        <span>
                            <span className="card-title">Marvel's Spider-Man 2 (PS5)</span>
                            <span className="card-genre">Genre: Action</span>
                            <span className="card-price">${dollars}<span className="card-superscript">,{cents}</span></span>
                        </span>
                    </div>
                </Link>

                <Link to={'/games/details'}>
                    <div className="card-container">
                        <div className="card-image-container">
                            <img src="https://m.media-amazon.com/images/I/81VGpLvXQuL._AC_UF1000,1000_QL80_.jpg" alt="Card" className="card-image" />
                        </div>
                        <span>
                            <span className="card-title">Marvel's Spider-Man 2 (PS5)</span>
                            <span className="card-genre">Genre: Action</span>
                            <span className="card-price">${dollars}<span className="card-superscript">,{cents}</span></span>
                        </span>
                    </div>
                </Link>

                <Link to={'/games/details'}>
                    <div className="card-container">
                        <div className="card-image-container">
                            <img src="https://m.media-amazon.com/images/I/81VGpLvXQuL._AC_UF1000,1000_QL80_.jpg" alt="Card" className="card-image" />
                        </div>
                        <span>
                            <span className="card-title">Marvel's Spider-Man 2 (PS5)</span>
                            <span className="card-genre">Genre: Action</span>
                            <span className="card-price">${dollars}<span className="card-superscript">,{cents}</span></span>
                        </span>
                    </div>
                </Link>

                <Link to={'/games/details'}>
                    <div className="card-container">
                        <div className="card-image-container">
                            <img src="https://m.media-amazon.com/images/I/81VGpLvXQuL._AC_UF1000,1000_QL80_.jpg" alt="Card" className="card-image" />
                        </div>
                        <span>
                            <span className="card-title">Marvel's Spider-Man 2 (PS5)</span>
                            <span className="card-genre">Genre: Action</span>
                            <span className="card-price">${dollars}<span className="card-superscript">,{cents}</span></span>
                        </span>
                    </div>
                </Link>

                <Link to={'/games/details'}>
                    <div className="card-container">
                        <div className="card-image-container">
                            <img src="https://m.media-amazon.com/images/I/81VGpLvXQuL._AC_UF1000,1000_QL80_.jpg" alt="Card" className="card-image" />
                        </div>
                        <span>
                            <span className="card-title">Marvel's Spider-Man 2 (PS5)</span>
                            <span className="card-genre">Genre: Action</span>
                            <span className="card-price">${dollars}<span className="card-superscript">,{cents}</span></span>
                        </span>
                    </div>
                </Link>

                <Link to={'/games/details'}>
                    <div className="card-container">
                        <div className="card-image-container">
                            <img src="https://m.media-amazon.com/images/I/81VGpLvXQuL._AC_UF1000,1000_QL80_.jpg" alt="Card" className="card-image" />
                        </div>
                        <span>
                            <span className="card-title">Marvel's Spider-Man 2 (PS5)</span>
                            <span className="card-genre">Genre: Action</span>
                            <span className="card-price">${dollars}<span className="card-superscript">,{cents}</span></span>
                        </span>
                    </div>
                </Link>

                <Link to={'/games/details'}>
                    <div className="card-container">
                        <div className="card-image-container">
                            <img src="https://m.media-amazon.com/images/I/81VGpLvXQuL._AC_UF1000,1000_QL80_.jpg" alt="Card" className="card-image" />
                        </div>
                        <span>
                            <span className="card-title">Marvel's Spider-Man 2 (PS5)</span>
                            <span className="card-genre">Genre: Action</span>
                            <span className="card-price">${dollars}<span className="card-superscript">,{cents}</span></span>
                        </span>
                    </div>
                </Link>

                <Link to={'/games/details'}>
                    <div className="card-container">
                        <div className="card-image-container">
                            <img src="https://m.media-amazon.com/images/I/81VGpLvXQuL._AC_UF1000,1000_QL80_.jpg" alt="Card" className="card-image" />
                        </div>
                        <span>
                            <span className="card-title">Marvel's Spider-Man 2 (PS5)</span>
                            <span className="card-genre">Genre: Action</span>
                            <span className="card-price">${dollars}<span className="card-superscript">,{cents}</span></span>
                        </span>
                    </div>
                </Link>

                <Link to={'/games/details'}>
                    <div className="card-container">
                        <div className="card-image-container">
                            <img src="https://m.media-amazon.com/images/I/81VGpLvXQuL._AC_UF1000,1000_QL80_.jpg" alt="Card" className="card-image" />
                        </div>
                        <span>
                            <span className="card-title">Marvel's Spider-Man 2 (PS5)</span>
                            <span className="card-genre">Genre: Action</span>
                            <span className="card-price">${dollars}<span className="card-superscript">,{cents}</span></span>
                        </span>
                    </div>
                </Link>
            </div>
        </>
    )
}