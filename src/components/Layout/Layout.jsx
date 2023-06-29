import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export function Layout() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}





// import { Link, Outlet } from "react-router-dom"
// import Header from "components/Header/Header";


// export const Layout = () => {
//     return (
// <container>
//     <Header>
//         <Link to="/home">Home</Link>
//         <Link to="/movies">Movies</Link>
//     </Header>
//     <Outlet />
// </container>
//     );
// };

// export default Layout;