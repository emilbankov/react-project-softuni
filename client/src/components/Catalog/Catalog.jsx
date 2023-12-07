import Search from "../Search/Search.jsx";
import Card from "../Card/Card.jsx";

export default function Catalog() {
    return (
        <>
            <div class="catalog-header">
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