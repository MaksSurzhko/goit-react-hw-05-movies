import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getMovie } from 'components/Api/Api';
import { Loader } from 'components/Loader/Loader';
import { FormSearch, InputSearch, LabelSearch, SearchButton } from './Movies.styled'; 
import { MoviesText } from '../Home/Home.styled';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  useEffect(() => {
  const fetchMovie = async () => {
    const movieName = searchMovie.get('movieName') ?? '';
    
    try {
      setIsLoading(true);
      const data = await getMovie(movieName);
      setMovies(data.results);
      if (data.results.length === 0) {
        setError(`Movie '${movieName}' not found`);
      } else {
        setError(null);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  fetchMovie();
  }, [searchMovie]);


  useEffect(() => {
    const movieName = searchMovie.get('movieName') ?? '';
    setSearchInputValue(movieName);
    // fetchMovie();
  }, [searchMovie]);

  const handleSearch = evt => {
    setSearchInputValue(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (searchInputValue === '') {
      setSearchMovie({});
    } else {
      setIsInputEmpty(false)
      setSearchMovie({ movieName: searchInputValue });
    }
  };

  const handleButtonClick = () => {
    handleSubmit(new Event('submit'));
  };

  

  return (
    <>
      {!isInputEmpty && error && (
       <p>Movie {searchInputValue} not found</p>
      )}

      {isLoading && <Loader />}
      <FormSearch onSubmit={handleSubmit}>
        <LabelSearch>Movie search</LabelSearch>
        <InputSearch 
          type="text" 
          value={searchInputValue}
          onChange={handleSearch} />
        <SearchButton type="button" onClick={handleButtonClick}>
          Search
        </SearchButton>
      </FormSearch>

      {movies.map(movie => (
        <MoviesText key={movie.id}>
          <Link to={{ pathname: `/movies/${movie.id}`, state: { from: '/movies' } }}>
            {movie.title}
          </Link>
        </MoviesText>
      ))}
    </>
  );
};

export default Movies;



// import { useEffect, useState } from 'react';
// import { Link, useSearchParams } from 'react-router-dom';
// import { getMovie } from 'components/Api/Api';
// import { Loader } from 'components/Loader/Loader';
// import { FormSearch, InputSearch, LabelSearch, SearchButton } from './Movies.styled'; 
// import { MoviesText } from '../Home/Home.styled';

// const Movies = () => {
//   const [searchMovie, setSearchMovie] = useSearchParams();
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [ setError] = useState(null);
//   const [searchInputValue, setSearchInputValue] = useState("");

//   const fetchMovie = async () => {
//     const movieName = searchMovie.get('movieName') ?? '';
    
//     try {
//       setIsLoading(true);
//       const data = await getMovie(movieName);
//       setMovies(data.results);
//       if (data.results.length === 0) {
//         setError(`Movie '${movieName}' not found`);
//       } else {
//         setError(null);
//       }
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSearch = evt => {
//     setSearchInputValue(evt.target.value);
//   };

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     if (searchInputValue === '') {
//       setSearchMovie({});
//     } else {
//       setSearchMovie({ movieName: searchInputValue });
//     }
//   };

//   const handleButtonClick = () => {
//     handleSubmit(new Event('submit'));
//   };

//   useEffect(() => {
//     const movieName = searchMovie.get('movieName') ?? '';
//     setSearchInputValue(movieName);
//     fetchMovie();
//   }, [searchMovie]);

//   return (
//     <>
//       {/* {!searchInputValue && error && (
//        <p>Movie {searchInputValue} not found</p>
//       )} */}

//       {isLoading && <Loader />}
//       <FormSearch onSubmit={handleSubmit}>
//         <LabelSearch>Movie search</LabelSearch>
//         <InputSearch 
//           type="text" 
//           value={searchInputValue}
//           onChange={handleSearch} />
//         <SearchButton type="button" onClick={handleButtonClick}>
//           Search
//         </SearchButton>
//       </FormSearch>

//       {movies.map(movie => (
//         <MoviesText key={movie.id}>
//           <Link to={{ pathname: `/movies/${movie.id}`, state: { from: '/movies' } }}>
//             {movie.title}
//           </Link>
//         </MoviesText>
//       ))}
//     </>
//   );
// };

// export default Movies;






