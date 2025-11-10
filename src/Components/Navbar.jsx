// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import React from "react";

export default function Navbar({ selectedCount }) {
  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left logo & title */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-pink-500 flex items-center justify-center font-bold">
            CR
          </div>
          <div>
            <div className="font-bold text-lg">Cricket Dream</div>
            <div className="text-xs text-slate-300">Dream 11 Team Builder</div>
          </div>
        </Link>

        {/* Right links */}
        <div className="flex items-center gap-5 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">Available</Link>
          <Link to="/selected" className="hover:text-yellow-300 transition">
            Selected ({selectedCount})
          </Link>
        </div>
      </div>
    </nav>
  );
}
