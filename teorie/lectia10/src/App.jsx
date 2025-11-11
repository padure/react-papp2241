import React from 'react';
import Nav from './pages/Nav';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Nav />
      <main>
          <Outlet />
      </main>
    </>
  );
}

export default App;
