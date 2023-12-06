import React, { useState } from 'react';

export default function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const performSearch = async () => {
        try {
            const apiUrl = `/data/yourCollection?where=${encodeURIComponent('propertyName=' + searchQuery)}`;
            const response = await fetch(apiUrl);
            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter your search..."
            />
            <button onClick={performSearch}>Search</button>
        </div>
    );
};