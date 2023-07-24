// src/components/Search.tsx
import React, { useState } from "react";
import { searchMusic } from "../musicService";

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await searchMusic(searchTerm);
      if (response && response.tracks && response.tracks.hits) {
        setSearchResults(response.tracks.hits);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {/* {searchResults.map((result) => (
          <li key={result.track.key}>
            <img src={result.track.images.coverart} alt={result.track.title} />
            <span>{result.track.title}</span>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default Search;
