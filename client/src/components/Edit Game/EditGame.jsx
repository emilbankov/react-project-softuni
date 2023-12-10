import { useEffect, useState } from 'react';
import './EditGame.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import * as gameService from '../../services/gamesService.js'
import validate from './validate.js';
export default function EditGame() {
    const navigate = useNavigate();
    const { gameId } = useParams();
    const [errors, setErrors] = useState({});
    const [game, setGame] = useState({
        title: "",
        imageUrl: "",
        genre: "",
        developer: "",
        players: "",
        price: "",
        description: ""
    });

    useEffect(() => {
        gameService.getOne(gameId)
            .then(result => {
                setGame(result);
            });
    }, [gameId]);

    const editGameSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));
        const formErrors = validate(values);

        if (Object.keys(formErrors).length > 0) {
            const firstErrorField = Object.keys(formErrors)[0];
            setErrors(firstErrorField ? { [firstErrorField]: formErrors[firstErrorField] } : {});
            return;
        }

        await gameService.edit(gameId, values);
        navigate(`/games/details/${gameId}`);
    }

    const onChange = (e) => {
        setGame(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="edit-game-page">
            <div className="edit-game-container">
                <h2>Edit Game</h2>
                <form className="edit-game-form" onSubmit={editGameSubmitHandler}>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name='title'
                        placeholder="Enter game title"
                        value={game.title}
                        onChange={onChange}
                    />
                    {errors.title && <div className="error-msg"><span>{errors.title}</span></div>}

                    <label htmlFor="imageUrl">Image URL:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name='imageUrl'
                        placeholder="Enter game image URL"
                        value={game.imageUrl}
                        onChange={onChange}
                    />
                    {errors.imageUrl && <div className="error-msg"><span>{errors.imageUrl}</span></div>}

                    <label htmlFor="genre">Genre:</label>
                    <input
                        type="text"
                        id="genre"
                        name='genre'
                        placeholder="Enter game genre"
                        value={game.genre}
                        onChange={onChange}
                    />
                    {errors.genre && <div className="error-msg"><span>{errors.genre}</span></div>}

                    <label htmlFor="developer">Developer:</label>
                    <input
                        type="text"
                        id="developer"
                        name='developer'
                        placeholder="Enter game developer"
                        value={game.developer}
                        onChange={onChange}
                    />
                    {errors.developer && <div className="error-msg"><span>{errors.developer}</span></div>}

                    <label htmlFor="players">Players:</label>
                    <input
                        type="number"
                        id="players"
                        name='players'
                        placeholder="Enter players count"
                        value={game.players}
                        onChange={onChange}
                    />
                    {errors.players && <div className="error-msg"><span>{errors.players}</span></div>}

                    <label htmlFor="price">Price:</label>
                    <input
                        type="text"
                        id="price"
                        name='price'
                        placeholder="Enter game price"
                        value={game.price}
                        onChange={onChange}
                    />
                    {errors.price && <div className="error-msg"><span>{errors.price}</span></div>}

                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name='description'
                        placeholder="Enter game description"
                        value={game.description}
                        onChange={onChange}
                    ></textarea>
                    {errors.description && <div className="error-msg"><span>{errors.description}</span></div>}

                    <button type="submit">Edit Game</button>
                </form>
            </div>
        </div>
    );
}