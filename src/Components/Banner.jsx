// src/components/Banner.jsx
import { Link } from "react-router-dom";
import React from "react";

export default function Banner() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-400 text-white py-16 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="mt-3 text-slate-100 max-w-2xl mx-auto md:mx-0">
          Pick your star players, create the perfect squad, and build a champion team beyond boundaries.
        </p>

        <div className="mt-6">
          <Link
            to="/selected"
            className="px-5 py-2 rounded-md bg-white text-slate-900 font-semibold hover:bg-yellow-300 transition"
          >
            View Selected Players
          </Link>
        </div>
      </div>
    </header>
  );
}
