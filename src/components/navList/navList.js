import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavList extends Component {
  render() {
    return (
      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Search</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/show">Show Weather</NavLink>
        </li>
      </ul>
    )
  }
}
