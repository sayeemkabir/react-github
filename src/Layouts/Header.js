import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full bg-[#1770F0] flex justify-between h-9 pr-3 align-middle">
      <div>
        <h2 className="pl-2 text-bold text-3xl">
          <Link to="/">Github Users</Link>
        </h2>
      </div>
      <div>
        <ul className="flex gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>{" "}
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/FAQ">FAQ Page</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
