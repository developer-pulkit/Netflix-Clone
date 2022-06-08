import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <div className="w-full h-screen">
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/es-050918-movie-posters-of-the-80s-1526050531.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
          alt="Background Image"
          className="hidden sm:block absolute w-full h-full object-cover"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              <form className="w-full flex flex-col py-4">
                <input
                  className="p-3 my-2 bg-gray-700 rounded text-lg"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded text-lg"
                  type="password"
                  placeholder="password"
                  autoComplete="password"
                />
                <button className="bg-red-600 py-2 my-7 rounded font-bold w-full text-lg">
                  Sign In
                </button>
                <div className="flex justify-between items-center text-lg text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-4">
                  <span className="text-gray-600 text-lg">New to Netflix?</span>
                  <Link to="/signup"> Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
