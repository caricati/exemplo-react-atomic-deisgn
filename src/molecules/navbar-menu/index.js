import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavbarMenu extends Component {
  render() {
    return (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/kanban">Kanban</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/atomic">Atomic</Link>
        </li>
      </ul>
    )
  }
}