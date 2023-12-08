import { useContext } from 'react';
import './AddGame.module.css'
import AuthContext from '../../contexts/AuthContext.js';
import useForm from '../../hooks/useForm.js';

export default function AddGame() {
    const { createGameHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(createGameHandler, {
        title: "",
        imageUrl: "",
        genre: "",
        developer: "",
        players: "",
        price: "",
        description: ""
    })

    return (
        <div className="add-game-page">
            <div className="add-game-container">
                <h2>Add Game</h2>
                <form className="add-game-form" onSubmit={onSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name='title'
                        placeholder="Enter game title"
                        onChange={onChange}
                        value={values.name}
                    />

                    <label htmlFor="imageUrl">Image URL:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name='imageUrl'
                        placeholder="Enter game image URL"
                        onChange={onChange}
                        value={values.imageUrl}
                    />

                    <label htmlFor="genre">Genre:</label>
                    <input
                        type="text"
                        id="genre"
                        name='genre'
                        placeholder="Enter game genre"
                        onChange={onChange}
                        value={values.genre}
                    />

                    <label htmlFor="developer">Developer:</label>
                    <input
                        type="text"
                        id="developer"
                        name='developer'
                        placeholder="Enter game developer"
                        onChange={onChange}
                        value={values.developer}
                    />

                    <label htmlFor="players">Players:</label>
                    <input
                        type="number"
                        id="players"
                        name='players'
                        placeholder="Enter players count"
                        onChange={onChange}
                        value={values.players}
                    />

                    <label htmlFor="price">Price:</label>
                    <input
                        type="text"
                        id="price"
                        name='price'
                        placeholder="Enter game price"
                        onChange={onChange}
                        value={values.price}
                    />

                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name='description'
                        placeholder="Enter game description"
                        onChange={onChange}
                        value={values.description}
                    ></textarea>

                    <button type="submit">Add Game</button>
                </form>
            </div>
        </div>
    );
}