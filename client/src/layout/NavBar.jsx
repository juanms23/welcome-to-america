import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="p-4 bg-white flex gap-8 shadow items-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-blue-600 text-3xl font-[Merriweather] font-bold hover:underline"
        >
          <img
            src="/app-icon.svg"
            alt="App Icon"
            className="h-8 w-8 -translate-y-1"
          />
          Welcome to America
        </Link>
        <Link
          to="/topics"
          className="text-blue-600 hover:underline text-xl font-[Merriweather] font-bold"
        >
          Topics
        </Link>
        <Link
          to="/forms"
          className="text-blue-600 hover:underline text-xl font-[Merriweather] font-bold"
        >
          Forms
        </Link>
        <Link
          to="/find_help"
          className="text-blue-600 hover:underline text-xl font-[Merriweather] font-bold"
        >
          Find Help
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
