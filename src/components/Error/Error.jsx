import { Link } from 'react-router-dom';
import './Error.module.css';

export default function Error() {
    return (
        <div className="error">
            <div className='error-image-container'><img src="../images/error.png" /></div>
            <div className='error-text-container'>
                <p>GAME OVER</p>
                <p>uh-oh, you've hit a 404 page...</p>
                <button><Link to={'/'}>Return Home</Link></button>
            </div>

        </div>
    )
}