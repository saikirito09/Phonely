import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-around">
        <Link to="/" className="text-white hover:underline">Home</Link>
        <Link to="/chat" className="text-white hover:underline">Chat</Link>
        <Link to="/scheduling" className="text-white hover:underline">Scheduling</Link>
        <Link to="/support" className="text-white hover:underline">Support</Link>
      </div>
    </nav>
  );
};

export default NavBar;
