import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {

const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
      const apiKey = '79aa75b2556ae6f4247babbd2f83986e';

    axios.get(`https://api.themoviedb.org/3/trending/movie/{time_window}&api_key=${apiKey}`)
      .then(response => {
        setTrendingMovies(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      {trendingMovies.map(movie => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Home;

