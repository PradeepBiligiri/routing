import React from "react";
import { Link } from "react-router-dom";

export function Navigate() {
  return (
    <div className="navigate">
      <ul className="route-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/employees">Employees</Link>
        </li>
      </ul>
    </div>
  );
}
