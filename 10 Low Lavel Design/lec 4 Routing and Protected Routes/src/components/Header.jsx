import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="text-center py-2">
        <h1 className="text-4xl font-mono font-bold text-gray-600">
          Namaste Frontend System Design
        </h1>
        <h2 className="text-2xl font-bold">Routing and Protected Routes</h2>
      </div>
      <div className="bg-black text-blue-100 mx-9 p-2 text-2xl font-bold flex justify-between">
        <Link to={"/"}>HOME</Link>
        <div className="flex gap-2">
          <Link to={"/user"} className="border border-white px-2">
            User
          </Link>
          <Link to={"/admin"} className="border border-white px-2">
            Admin
          </Link>
          <Link to={"/login"} className="border border-white px-2">
            Login
          </Link>
        </div>
      </div>
      ;
    </div>
  );
}

export default Header;
