import React, { useEffect, useState } from 'react';
import { getDetailMovie } from 'components/Api/Api';
import { Loader } from 'components/Loader/Loader';
import { Outlet, useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { ButtonBack } from './MoviesDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [date, setDate] = useState('');
  const [urlImage, setUrlImage] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const goBack = location.state?.from || '/';

  useEffect(() => {
    const fetchDetailsMovie = async () => {
      try {
        setIsLoading(true);
        const movie = await getDetailMovie(movieId);
        const genres = movie.genres;
        const date = movie.release_date.split('-')[0];
        const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        if (movie === []) {
          setError('Інформація по фільму відсутня');
        } else {
          setGenres(genres);
          setMovie(movie);
          setDate(date);
          setUrlImage(url);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetailsMovie();
  }, [movieId]);

  const { title, overview, vote_average } = movie;

  const handleGoBack = () => {
    navigate(goBack);
  };

  return (
    <section>
      {error && <p>Sorry, something went wrong</p>}
      {isLoading && <Loader />}
      <ButtonBack onClick={handleGoBack}>Go Back</ButtonBack>
      <div>
        <img src={urlImage} alt={title}></img>
        <div>
          <h1>
            {title}
            <span>{date}</span>
          </h1>
          <p>User Score: {(vote_average * 10).toFixed(0)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(el => el.name).join(' / ')}</p>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </section>
  );
};

export default MovieDetails;


// import { useEffect, useState, useRef } from 'react';
// import { getDetailMovie } from 'components/Api/Api';
// import { Loader } from 'components/Loader/Loader';
// import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
// import { ButtonBack } from './MoviesDetails.styled';

// const MovieDetails = () => {
//   const location = useLocation();
//   const goBack = useRef(location.state?.from ?? '/');
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState([]);
//   const [genres, setGenres] = useState([]);
//   const [date, setDate] = useState('');
//   const [urlImage, setUrlImage] = useState('');
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
  
  

//   useEffect(() => {
//     const fetchDetalsMovie = async () => {
//       try {
//         setIsLoading(true)
//         const movie = await getDetailMovie(movieId);
//         const genres = movie.genres;
//         const date = movie.release_date.split('-')[0];
//         const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

//         if (movie === []) {
//           setError(`Інформація по фільму відсутня`);
//         } else {
//           setGenres(genres);
//           setMovie(movie);
//           setDate(date);
//           setUrlImage(url);
//         }
//         // setGenres(genres);
//         // setMovie(movie);
//         // setDate(date);
//         // setUrlImage(url);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchDetalsMovie();
//   }, [movieId]);

//   const { title, overview, vote_average } = movie;
//   // console.log('movie', movie);

//   const handelGoBack = () => {
//     window.history.back(goBack); 
//   };


//   return (
//     <section>
//       {error && <p>Sorry, something went wrong</p>}
//       {isLoading && <Loader />}
//       <ButtonBack onClick={handelGoBack}>Go Back</ButtonBack>
//       <div>
//         <img src={urlImage} alt={title}></img>
//         <div>
//           <h1>
//             {title}
//             <span>{date}</span>
//           </h1>
//           <p>User Score:{(vote_average * 10).toFixed(0)} %</p>
//           <h2>Overview</h2>
//           <p>{overview}</p>
//           <h3>Genres</h3>
//           <p>{genres.map(el => el.name).join(' / ')}</p>
//         </div>
//       </div>
//       <div>
//         <ul>
//           <li>
//             <Link to="cast">Cast</Link>
//           </li>
//           <li>
//             <Link to="reviews">Reviews</Link>
//           </li>
//         </ul>
//         <Outlet />
//       </div>
//     </section>
//   );
// };

// export default MovieDetails;


