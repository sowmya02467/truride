import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import newlogo from '../assets/newlogo.png';
import './Header.css';
import GetTheApp from './Gettheapp';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={newlogo} alt="" className="logo-img" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/features">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/howitworks">How it works</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/testimonials">Testimonials</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">Contact us</Link>
              </li>
            </ul>
            <GetTheApp />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
