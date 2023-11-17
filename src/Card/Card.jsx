export default function Card() {
    return (
        <div className="card-container">
            <div className="card-image-container">
                <img
                    src="https://www.albagame.al/cdn/shop/files/135179.png?v=1686908142"
                    alt="Card"
                    className="card-image"
                />
                <div className="card-overlay">
                    <h2 className="card-title">Spider-Man</h2>
                </div>
            </div>
            <div className="card-price-container">
                <p className="card-price">Price: $19.99</p>
            </div>
        </div>
    );
}