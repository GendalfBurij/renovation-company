// components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="glass-header">
    <nav className="nav-container">
      <Link to="/" className="logo">Repair.cat</Link>
      <div className="nav-links">
        <Link to="/work" className="nav-link">Work</Link>
        <Link to="/expertise" className="nav-link">Expertise</Link>
        <Link to="/agency" className="nav-link">Agency</Link>
        <Link to="/jobs" className="nav-link">Jobs</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  </header>
);

export default Header;