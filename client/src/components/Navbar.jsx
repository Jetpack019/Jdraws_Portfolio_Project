import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <img src="/vite.svg" alt="Vite logo" />
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" className="hover:underline">
            Experience
          </NavLink>
        </li>
        <li className="hover:underline">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
