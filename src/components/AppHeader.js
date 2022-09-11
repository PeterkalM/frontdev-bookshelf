import {Link} from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <h1>Bookshelf App</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
