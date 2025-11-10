// src/pages/SelectedPage.jsx
import { Link } from "react-router-dom";
import React from "react";

export default function SelectedPage({ selectedPlayers, onRemove, onClear }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Selected Players ({selectedPlayers.length})
        </h2>
        <Link
          to="/"
          className="text-sm text-slate-600 hover:underline hover:text-slate-800"
        >
          ← Back to Available
        </Link>
      </div>

      {selectedPlayers.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow text-slate-600">
          No players selected yet. Go to the Available page and pick your dream team!
        </div>
      ) : (
        <div className="space-y-3">
          {selectedPlayers.map((player) => (
            <div
              key={player.id}
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border"
            >
              <img
                src={player.img}
                alt={player.name}
                className="w-12 h-12 rounded-md object-cover"
              />
              <div className="flex-1">
                <div className="font-semibold">{player.name}</div>
                <div className="text-sm text-slate-500">
                  {player.role} · {player.price}
                </div>
              </div>
              <button
                onClick={() => onRemove(player)}
                className="px-3 py-1 text-sm rounded bg-red-100 text-red-700 hover:bg-red-200"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Clear All Button */}
          <div className="pt-5">
            <button
              onClick={onClear}
              className="px-5 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition"
            >
              Clear All
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
