import React from "react";

import { Link } from "react-router-dom";

export const Navigation = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to={"/"}>
            Kunden
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/tickets"}>
            Tickets
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/taetigkeiten"}>
            Taetigkeiten
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
