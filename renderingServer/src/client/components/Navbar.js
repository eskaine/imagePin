import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><Link to="/">imagePin</Link></li>
          <li><Link to="/all">All</Link></li>
          <li><Link to="/data">Data</Link></li>
        </ul>
      </div>
    </nav>
  );
};
