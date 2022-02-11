import React from "react";
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <Image className="fluid" src="../resources/images/find-and-home-logo.jpg"></Image>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Favourite Films
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link "  to="/">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  All Movies
                </Link>
              </li>
        
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
