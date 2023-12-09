import { useEffect, useState } from "react";
import Search from "../Search/Search.jsx";
import Card from "./Card/Card.jsx";
import * as gamesService from "../../services/gamesService.js";

export default function Catalog() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gamesService.getAll()
            .then(result => setGames(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <div className="catalog-header">
                <h1>Welcome to Our Games Catalog</h1>
                <p>"Unlock Your Gaming Universe: Explore Infinite Pixels, Where Every Game is a Masterpiece!"</p>
            </div>

            <Search />

            {games.length > 0 ?
                (
                    <div className="grid-container">

                        {games.map(game => (
                            <Card key={game._id} {...game} />
                        ))}

                    </div>
                ) : (
                    <div className="no-games">
                        <h1>There are no games added yet.</h1>
                    </div>
                )
            }
        </>
    )
}