import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FcGlobe } from 'react-icons/fc';
import Rockets from '../Rockets/Rockets';
import Missions from '../Missions/Missions';
import MyProfile from '../MyProfile/MyProfile';
import './NavLink.css';
import '../../App.css';

function NavLink() {
  return (
    <nav className="nav flex">
      <header className="flex header">
        <i><FcGlobe /></i>
        <h1>Space Travelers Hub</h1>
      </header>
      <ul className="items flex">
        <li><Link to="/">Rockets</Link></li>
        <li><Link to="/Missions">Missions</Link></li>
        <li><Link to="/MyProfile">My Profile</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </nav>
  );
}

export default NavLink;
