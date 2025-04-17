import React from "react";
import { Link } from "react-router-dom";
import '../index.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/users" className="nav-link">Users</Link>
          </li>
          <li>
            <Link to="/posts" className="nav-link">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
