import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getMovie } from 'components/Api/Api';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const movieName = searchMovie.get('movieName') ?? '';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const data = await getMovie(movieName);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [movieName]);

  const handleSearch = evt => {
    const movieNameValue = evt.target.value;
    if (movieNameValue === '') {
      return setSearchMovie({});
    }
    setSearchMovie({ movieName: movieNameValue });
  };

  return (
    <>
      {error && <p>Movie {movieName} not found</p>}
      {isLoading && <Loader />}
      <form>
        <input 
          type="text" 
          value={movieName}
          onChange={handleSearch} />
        <label>Movie search</label>
      </form>

      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{}}>
            {movie.title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default Movies;


// import { useEffect, useState } from 'react';
// import { Link, useSearchParams } from 'react-router-dom';
// import { getMovie } from 'components/Api/Api';
// import { Loader } from 'components/Loader/Loader';

// const Movies = () => {
//   const [searchMovie, setSearchMovie] = useSearchParams();
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const movieName = searchMovie.get('movieName') ?? '';

//   useEffect(() => {
//     const fetchMovie = async () => {
//       try {
//         setIsLoading(true);
//         const data = await getMovie(movieName);
//         setMovies(data.results);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchMovie();
//   }, [movieName]);

//   const handleSearch = evt => {
//     const movieNameValue = evt.target.value;
//     if (movieNameValue === '') {
//       return setSearchMovie({});
//     }
//     setSearchMovie({ movieName: movieNameValue });
//   };

//   return (
//     <>
//       {error && <p>Movie {movieName} not found</p>}
//       {isLoading && <Loader />}
//       <form>
//         <input 
//         type="text" 
//         value={movieName}
//         onChange={handleSearch} />
//         <label>Movie search</label>
//       </form>

//       {movies.map(movie => (
//         <li key={movie.id}>
//           <Link to={`${movie.id}`} state={{}}>
//             {movie.title}
//           </Link>
//         </li>
//       ))}
//     </>
//   );
// };

// export default Movies;







