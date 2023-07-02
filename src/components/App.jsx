// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// // import Home from './Pages/Home/Home';
// import { Layout } from './Layout/Layout';
// // import Movies from './Pages/Movies/Movies';
// // import MovieDetails from './Pages/MoviesDetails/MovieDetails';
// import { Cast } from "./cast/Cast"
// import { Reviews } from './reviews/Reviews';
// import { lazy } from 'react';


// const Home = lazy(() => import('./Pages/Home/Home'));
// const Movies = lazy(() => import('./Pages/Movies/Movies'));
// const MovieDetails = lazy(() => import('./Pages/MoviesDetails/MovieDetails'));

// export const App = () => {
//   return (
//   <div>
//   <Routes>
    
//    <Route path="/" element={<Layout/>} >
//      <Route index element={<Home/>} />
//      <Route path="movie" element={<Movies />} />
//      <Route path="movies/:movieId" element={<MovieDetails />}>
//        <Route path='cast' element={<Cast />} />
//        <Route path="reviews" element={<Reviews />} />
//      </Route>
//    </Route>
//   </Routes>
//   </div>
//   )
// };


import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Cast } from "./cast/Cast";
import { Reviews } from './reviews/Reviews';
import { lazy } from 'react';

const Home = lazy(() => import('./Pages/Home/Home'));
const Movies = lazy(() => import('./Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./Pages/MoviesDetails/MovieDetails'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="movie" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};

