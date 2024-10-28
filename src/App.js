import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await fetch(
          `https://itch.io/api/1/key/${process.env.REACT_APP_ITCHIO_API}/my-games`
        );
        const data = await response.json();
        setGames(data.games);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    }

    fetchGames();
  }, []);

  return (
    <div>
      <h1>My Itch.io Games</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <a href={`/games/${game.id}`}>{game.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
