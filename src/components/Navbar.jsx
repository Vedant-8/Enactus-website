import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
    <div className="font-bold text-lg">Enactus S.P.I.T.</div>
    <div className="flex space-x-4">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/team">Team</Link>
      <Link to="/events">Events</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
