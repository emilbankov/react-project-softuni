import { Link } from "react-router-dom";

export default function Card({
    _id,
    title,
    imageUrl,
    genre,
    price
}) {
    let [dollars, cents] = price.split(",");

    return (
        <Link to={`/games/details/${_id}`}>
            <div className="card-container">
                <div className="card-image-container">
                    <img src={imageUrl} alt="Card" className="card-image" />
                </div>
                <span>
                    <span className="card-title">{title}</span>
                    <span className="card-genre">Genre: {genre}</span>
                    <span className="card-price">${dollars}<span className="card-superscript">,{cents}</span></span>
                </span>
            </div>
        </Link>
    );
}