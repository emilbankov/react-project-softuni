import { useState } from 'react';
import './AddGame.module.css'

export default function AddGame() {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [genre, setGenre] = useState('');
    const [developer, setDeveloper] = useState('');
    const [players, setPlayers] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleAddGame = (e) => {
        e.preventDefault();
        // TODO
    };

    return (
        <div className="add-game-page">
            <div className="add-game-container">
                <h2>Add Game</h2>
                <form className="add-game-form" onSubmit={handleAddGame}>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Enter game title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label htmlFor="imageUrl">Image URL:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        placeholder="Enter game image URL"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />

                    <label htmlFor="genre">Genre:</label>
                    <input
                        type="text"
                        id="genre"
                        placeholder="Enter game genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                    />

                    <label htmlFor="developer">Developer:</label>
                    <input
                        type="text"
                        id="developer"
                        placeholder="Enter game developer"
                        value={developer}
                        onChange={(e) => setDeveloper(e.target.value)}
                    />

                    <label htmlFor="players">Players:</label>
                    <input
                        type="number"
                        id="players"
                        placeholder="Enter players count"
                        value={players}
                        onChange={(e) => setPlayers(e.target.value)}
                    />

                    <label htmlFor="price">Price:</label>
                    <input
                        type="text"
                        id="price"
                        placeholder="Enter game price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        placeholder="Enter game description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>

                    <button type="submit">Add Game</button>
                </form>
            </div>
        </div>
    );
}