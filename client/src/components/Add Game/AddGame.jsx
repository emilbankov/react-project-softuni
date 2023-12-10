import { useContext, useState } from 'react';
import './AddGame.module.css'
import AuthContext from '../../contexts/AuthContext.jsx';
import useForm from '../../hooks/useForm.js';

export default function AddGame() {
    const { createGameHandler } = useContext(AuthContext);
    const [errors, setErrors] = useState({});

    const validate = (values) => {
        const newErrors = {};

        if (!values.title) {
            newErrors.title = "Title is required!";
        } else if (values.title.length < 5) {
            newErrors.title = "Title must be at least 5 characters!";
        }

        if (!values.imageUrl) {
            newErrors.imageUrl = "Image URL is required!";
        } else if (!/^https?:\/\/.+/.test(values.imageUrl)) {
            newErrors.imageUrl = "Provide a valid image URL!";
        }

        if (!values.genre) {
            newErrors.genre = "Genre is required!";
        } else if (values.genre.length < 3) {
            newErrors.genre = "Genre must be at least 3 characters!";
        }

        if (!values.developer) {
            newErrors.developer = "Developer is required!";
        } else if (values.developer.length < 3) {
            newErrors.developer = "Developer must be at least 3 characters!";
        }

        if (!values.players) {
            newErrors.players = "Players is required!";
        } else if (values.players < 0) {
            newErrors.players = "Players must be positive number!";
        }

        if (!values.price) {
            newErrors.price = "Price is required!";
        } else if (!values.price.includes(",")) {
            newErrors.price = "Price must be number,number!";
        }

        if (!values.description) {
            newErrors.description = "Description is required!";
        } else if (values.description.length < 10 || values.description.length > 1000) {
            newErrors.description = "Description must be between 10 and 1000 characters!";
        }

        const firstErrorField = Object.keys(newErrors)[0];
        setErrors(firstErrorField ? { [firstErrorField]: newErrors[firstErrorField] } : {});

        return newErrors;
    };

    const { values, onChange, onSubmit } = useForm(createGameHandler, {
        title: "",
        imageUrl: "",
        genre: "",
        developer: "",
        players: "",
        price: "",
        description: "",
    }, validate)

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
                        value={values.title}
                        onChange={onChange}
                    />
                    {errors.title && <div className="error-msg"><span>{errors.title}</span></div>}

                    <label htmlFor="imageUrl">Image URL:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name='imageUrl'
                        placeholder="Enter game image URL"
                        value={values.imageUrl}
                        onChange={onChange}
                    />
                    {errors.imageUrl && <div className="error-msg"><span>{errors.imageUrl}</span></div>}

                    <label htmlFor="genre">Genre:</label>
                    <input
                        type="text"
                        id="genre"
                        name='genre'
                        placeholder="Enter game genre"
                        value={values.genre}
                        onChange={onChange}
                    />
                    {errors.genre && <div className="error-msg"><span>{errors.genre}</span></div>}

                    <label htmlFor="developer">Developer:</label>
                    <input
                        type="text"
                        id="developer"
                        name='developer'
                        placeholder="Enter game developer"
                        value={values.developer}
                        onChange={onChange}
                    />
                    {errors.developer && <div className="error-msg"><span>{errors.developer}</span></div>}

                    <label htmlFor="players">Players:</label>
                    <input
                        type="number"
                        id="players"
                        name='players'
                        placeholder="Enter players count"
                        value={values.players}
                        onChange={onChange}
                    />
                    {errors.players && <div className="error-msg"><span>{errors.players}</span></div>}

                    <label htmlFor="price">Price:</label>
                    <input
                        type="text"
                        id="price"
                        name='price'
                        placeholder="Enter game price"
                        value={values.price}
                        onChange={onChange}
                    />
                    {errors.price && <div className="error-msg"><span>{errors.price}</span></div>}

                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name='description'
                        placeholder="Enter game description"
                        value={values.description}
                        onChange={onChange}
                    ></textarea>
                    {errors.description && <div className="error-msg"><span>{errors.description}</span></div>}

                    <button type="submit">Add Game</button>
                </form>
            </div>
        </div>
    );
}