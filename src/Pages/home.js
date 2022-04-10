import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export function Home() {
  return (
    <div className="flex flex-col md:flex-row max-w-full h-screen">
      <div className="basis-1/2 bg-primaryCoral justify-center flex flex-col items-center md:p-0 pt-10">
        <img src={logo} className="App-logo -mt-20" alt="logo" />
        <h1 className=" font-bold text-6xl text-slate-900">WYZR</h1>
        <h2 className=" font-bold text-3xl text-slate-800 mt-4">
          Indian stories by Indian authors.
        </h2>
      </div>
      <div className="basis-1/2 flex justify-center items-center">
        <Link to="/search">
          <button className=" rounded-lg font-bold text-3xl bg-primaryCoral text-white md:m-0 md:p-4 p-2   mx-4">
            Sign in with Google
          </button>
        </Link>
      </div>
    </div>
  );
}
