export default function Card() {
    return (
        <Link to={'/'}>
            <div className="card-container">
                <div className="card-image-container">
                    <img src="https://m.media-amazon.com/images/I/81VGpLvXQuL._AC_UF1000,1000_QL80_.jpg" alt="Card" className="card-image" />
                </div>
                <span>
                    <span className="card-title">Marvel's Spider-Man: Miles Morales (PS5)</span>
                    <span className="card-genre">Genre: Action</span>
                    <span className="card-price">${dollars}<span className="card-superscript">,{cents}</span></span>
                </span>
            </div>
        </Link>
    );
}