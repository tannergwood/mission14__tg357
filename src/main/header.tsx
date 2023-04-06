import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      {/* This page is on every page and has the links between the sites */}
      <div>
        <h1 className="text-center">Joel Hilton's Movie Website!!</h1>
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="col-3"></div>
          <Link to="" className="col-2 nav-item btn">
            Home Page
          </Link>
          <br />
          <Link to="movies" className="col-2 nav-item btn">
            Legendary Movies
          </Link>
          <br />
          <Link to="podcast" className="col-2 nav-item btn">
            Podcast
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
