import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>Veridia Hiring</h1>
      <div>
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/apply">Apply</Link>
        <Link to="/applicant-dashboard">Applicant</Link>
        <Link to="/admin-dashboard">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;
