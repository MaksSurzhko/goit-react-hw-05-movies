// import React, { useEffect, useState } from 'react';
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
//           type="text" 
//           value={movieName}
//           onChange={handleSearch} />
//         <label>Movie search</label>
//       </form>

//       {movies.map(movie => (
//         <li key={movie.id}>
//           <Link to={`/movies/${movie.id}`} state={{}}>
//             {movie.title}
//           </Link>
//         </li>
//       ))}
//     </>
//   );
// };

// export default Movies;


// import { useEffect, useState } from 'react';
// import { Link, useSearchParams } from 'react-router-dom';
// import { getMovie } from 'components/Api/Api';
// import { Loader } from 'components/Loader/Loader';
// import { FormSearch, InputSearch, LabelSearch } from './Movies.styled';
// import { MoviesText } from '../Home/Home.styled';

// const Movies = () => {
//   const [searchMovie, setSearchMovie] = useSearchParams();
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   // const movieName = searchMovie.get('movieName') ?? '';
//   const [isInputEmpty, setIsInputEmpty] = useState(true);
//   const [searchInputValue, setSearchInputValue] = useState("")


//   useEffect(() => {

//         const fetchMovie = async () => {
//           const movieName = searchMovie.get('movieName') ?? '';
          
//           try {
//             setIsLoading(true);
//             const data = await getMovie(movieName);
//             setMovies(data.results);
//             if (data.results.length === 0) {
//               setError(`Movie '${movieName}' not found`);
//             } else {
//               setError(null);
//             }
//             setIsInputEmpty(movieName === "")
//           } catch (error) {
//             setError(error.message);
//           } finally {
//             setIsLoading(false);
//           }
//         };

//         fetchMovie();
//         }, [searchMovie]);
    
//       //   if (!isInputEmpty) {
//       //     fetchMovie();
//       //   }
//       // }, [isInputEmpty, movieName]);

      

//   const handleSearch = evt => {
//     const movieNameValue = evt.target.value;
//     if (movieNameValue === '') {
//       return setSearchMovie({});
//     }
//     setSearchMovie({ movieName: movieNameValue });
//     setIsInputEmpty(false);
//   };

//   useEffect(() => {
//     const movieName = searchMovie.get('movieName') ?? '';
//     setSearchInputValue(movieName);
//   }, [searchMovie]);

//   // const handleSearch = evt => {
//   //       setSearchInputValue(evt.target.value);
//   //     };

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     if (searchInputValue === '') {
//       setIsInputEmpty(true);
//       setSearchMovie({});
//     } else {
//       setIsInputEmpty(false);
//       setSearchMovie({ movieName: searchInputValue });
//     }
//   };

//   return (
//     <>
//       {!isInputEmpty && error && (
//        <p>Movie {searchInputValue} not found</p>
//       )}

//       {isLoading && <Loader />}
//       <FormSearch onSubmit={handleSubmit}>
//       <LabelSearch>Movie search</LabelSearch>
//         <InputSearch 
//         type="text" 
//         value={searchInputValue}
//         onChange={handleSearch} />
        
//       </FormSearch>

//       {/* <SearchButton type="submit">Search</SearchButton> */}

//       {movies.map(movie => (
//   <MoviesText key={movie.id}>
//     <Link to={{ pathname: `/movies/${movie.id}`, state: { from: '/movies' } }}>
//       {movie.title}
//     </Link>
//   </MoviesText>
// ))}
//       {/* {movies.map(movie => (
//         <MoviesText key={movie.id}>
//           <Link to={`/movies/${movie.id}`} state={{}}>
//             {movie.title}
//           </Link>
//         </MoviesText>
//       ))} */}
//     </>
//   );
// };

// export default Movies;


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
  const [setError] = useState(null);
  const [searchInputValue, setSearchInputValue] = useState("");

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

  const handleSearch = evt => {
    setSearchInputValue(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (searchInputValue === '') {
      setSearchMovie({});
    } else {
      setSearchMovie({ movieName: searchInputValue });
    }
  };

  const handleButtonClick = () => {
    handleSubmit(new Event('submit'));
  };

  useEffect(() => {
    const fetchMovie = async () => {
      const movieName = searchMovie.get('movieName') ?? '';
      setSearchInputValue(movieName);
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
  }, [searchMovie, fetchMovie, setError]);

  return (
    <>
      {/* {!searchInputValue && error && (
       <p>Movie {searchInputValue} not found</p>
      )} */}

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






