import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export function Home() {
  return (
    <div className="flex max-w-full h-screen">
      <div className="basis-1/2 bg-primaryCoral justify-center flex flex-col items-center">
        <img src={logo} className="App-logo -mt-20" alt="logo" />
        <h1 className=" font-bold text-6xl text-slate-900">WYZR</h1>
        <h2 className=" font-bold text-3xl text-slate-800 mt-4">
          Indian stories by Indian authors.
        </h2>
      </div>
      <div className="basis-1/2 flex justify-center items-center">
        <Link to="/search">
          <button className=" rounded-lg font-bold text-3xl p-4 bg-primaryCoral text-white">
            Sign in with google
          </button>
        </Link>
      </div>
    </div>
  );
}
