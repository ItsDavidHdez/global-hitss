import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center py-4">
      <Link className=" bg-indigo-600 px-2 py-1 rounded-sm text-sm" to="/add">
        Create register
      </Link>
    </header>
  );
}

export default Header;
