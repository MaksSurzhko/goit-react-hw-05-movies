// import React from "react"


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
      
//     </div>
//   );
// };

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home';

export const App = () => {
  return (
  <div>
  <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    </div>
  )
};



