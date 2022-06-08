import { async } from "@firebase/util";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "..//context/AuthContent";

function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z[100] w-full absolute">
      <Link to="/" className="z-10">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div className="z-10">
          <Link to="/login">
            <button className="text-white pr-4">Account</button>
          </Link>
          <Link to="/signup" onClick={handleLogout}>
            <button className="bg-red-600 px-6 py-2 rounded curser-pointer">
              Logout
            </button>
          </Link>
        </div>
      ) : (
        <div className="z-10">
          <Link to="/login">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded curser-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
