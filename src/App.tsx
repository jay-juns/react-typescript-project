import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App():JSX.Element {
  
  return (
    <div className="App">
      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contents">Contents</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;