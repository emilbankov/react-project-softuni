export default function Card() {
    return (
        <div className="card-container">
            <div className="card-image-container">
                <img
                    src="https://image.api.playstation.com/vulcan/ap/rnd/202011/0402/AcjaXqwZzggGiKLFdEfHMp0H.png"
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