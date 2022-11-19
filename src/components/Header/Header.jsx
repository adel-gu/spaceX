import React from 'react';
import { NavLink } from 'react-router-dom';
import Planet from '../../assets/planet.png';
import './Header.css';
import '../../App.css';

function Header() {
  const activeStyle = {
    textDecoration: 'underline',
  };

  const navLinkStyle = ({isActive}) => (isActive ? activeStyle : undefined);

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
              style={navLinkStyle}
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Dragons"
              style={navLinkStyle}
            >
              Dragons
            </NavLink>
          </li>
          <li>
            <NavLink to="/Missions" style={navLinkStyle}>
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink to="/MyProfile" style={navLinkStyle}>
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
