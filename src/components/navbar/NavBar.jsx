import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Rockets from '../Rockets/Rockets';
import Missions from '../Missions/Missions';
import MyProfile from '../MyProfile/MyProfile';
import Planet from '../../assets/planet.png';
import './NavBar.css';
import '../../App.css';

function NavBar() {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <header>
      <nav className="container flex">
        <div className="head-logo flex">
          <img className="img" src={Planet} alt="SpaceX Logo" />
          <h1>Space Travelers Hub</h1>
        </div>
        <ul className="nav-items flex">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Missions"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink to="/MyProfile" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              My Profile
            </NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </nav>
    </header>
  );
}

export default NavBar;
