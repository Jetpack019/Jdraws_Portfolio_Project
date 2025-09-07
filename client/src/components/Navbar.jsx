import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <img src="/vite.svg" alt="Vite logo" />
      <ul className="flex space-x-4">
        <li className="hover:underline">Home</li>
        <li className="hover:underline">About</li>
        <li className="hover:underline">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
