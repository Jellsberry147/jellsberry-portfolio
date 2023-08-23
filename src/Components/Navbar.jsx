import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="topnav">
      <Link to="/jellsberry-portfolio/">Home</Link>
      <Link to="/jellsberry-portfolio/Contact">Contact</Link>
      <Link to="/jellsberry-portfolio/About">About</Link>
      <Link to="/jellsberry-portfolio/Hobbies">Hobbies</Link>
    </nav>
  );
}
