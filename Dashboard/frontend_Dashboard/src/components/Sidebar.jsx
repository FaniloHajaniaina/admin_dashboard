// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Sidebar = () => {
  return (
    <div className="bg-dark text-light sidebar">
      <h2 className="text-center p-3">Dashboard</h2>
      <ul className="nav flex-column p-3">
        <li className="nav-item">
          <Link className="nav-link text-light" to="/">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/profile">
            <i className="fas fa-user"></i> Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/messages">
            <i className="fas fa-envelope"></i> Messages
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/settings">
            <i className="fas fa-cog"></i> Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
