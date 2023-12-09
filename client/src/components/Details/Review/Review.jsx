export default function Review({
    title,
    review,
    owner
}) {

    const { username } = owner;
    const letter = username.split("")[0].toUpperCase();

    return (
        <div className="review-item">
            <div className="review-author">
                <div className="author-banner">
                    {letter}
                </div>
                <div className="author-username">
                    {username}
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