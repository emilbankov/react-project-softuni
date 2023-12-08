import { useParams } from 'react-router-dom';
import * as reviewsService from '../../../services/reviewsService.js';

export default function AddReview() {
    const { gameId } = useParams();
    
    const addReviewHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newComment = await reviewsService.create(
            gameId,
            formData.get('title'),
            formData.get('review')
        );

        console.log(newComment);
    }

    return (
        <div className="add-review">
            <span className='add-review-title' id='add-review-title'>Add your review</span>

            <form onSubmit={addReviewHandler}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Enter review title"
                />

                <label htmlFor="review">Review:</label>
                <input
                    type="text"
                    id="review"
                    name="review"
                    placeholder="Enter your review"
                />

                <button type="submit">Add Review</button>
            </form>
        </div>
    )
}