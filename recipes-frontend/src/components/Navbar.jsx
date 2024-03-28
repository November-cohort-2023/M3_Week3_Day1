import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Recipes</Link>
        </li>
        <li>
          <Link to="/create">Create Recipe</Link>
        </li>
        <li>
          <Link to="/chef/create">Create Chef</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
