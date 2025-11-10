// src/pages/AvailablePage.jsx
import PlayerCard from "../Components/PlayerCard";
import React from "react";

export default function AvailablePage({ players, selectedPlayers, onChoose }) {
  // Check if player already chosen
  const isChosen = (player) => selectedPlayers.some((p) => p.id === player.id);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">
        Available Players
      </h2>

      {/* Grid of Player Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            onChoose={onChoose}
            chosen={isChosen(player)}
          />
        ))}
      </div>
    </div>
  );
}
