export default function Review({
    title,
    review
}) {
    return (
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
                    {title}
                </div>
                <div className="review-text">
                    {review}
                </div>
            </div>
        </div>
    );
};