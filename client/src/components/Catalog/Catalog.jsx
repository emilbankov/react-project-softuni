import { useEffect, useState } from "react";
import Search from "../Search/Search.jsx";
import Card from "./Card/Card.jsx";
import * as gameService from "../../services/gamesService.js";

export default function Catalog() {
    const [games, setGames] = useState();

    useEffect(() => {
        gameService.getAll()
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

            <div className="grid-container">

                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </div>
        </>
    )
}