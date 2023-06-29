import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { getMovies } from "../../Api/Api"
import { Loader } from 'components/Loader/Loader';
import { ListTopMovies, MoviesText, SectionTopMovies, } from './Home.styled';
import { Link } from 'react-router-dom';



const Home = () => {

const [listMovies, setListMovies] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState(null)

useEffect(() => {
    const fetchListMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getMovies();
        const listMovies = data.results;

        setListMovies(listMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListMovies();
  }, []);

  return (
    <>
    
    <SectionTopMovies>
        {error && <p>Sorry, something went wrong</p>}
        {isLoading && <Loader />}
      <h1>Trending Movies</h1>
      <ListTopMovies>
      {listMovies.map(movie => (
        <MoviesText key={movie.id}>
          <Link to={`movies/${movie.id}`} state={{}}>{movie.title}</Link>
        </MoviesText>
      ))}
      </ListTopMovies>
    </SectionTopMovies>
    </>
  );
};

export default Home;
