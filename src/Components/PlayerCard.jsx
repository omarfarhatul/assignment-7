// src/components/PlayerCard.jsx
export default function PlayerCard({ player, onChoose, chosen }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden border hover:shadow-md transition">
      <div className="p-4 flex gap-4">
        {/* Player Image */}
        <img
          src={player.img}
          alt={player.name}
          className="w-20 h-20 rounded-md object-cover"
        />

        {/* Player Details */}
        <div className="flex-1">
          <div className="font-semibold text-lg">{player.name}</div>
          <div className="text-sm text-slate-500">{player.role}</div>

          <div className="mt-2 flex gap-3 text-xs text-slate-600">
            <span>⭐ {player.rating}</span>
            <span>|</span>
            <span>{player.price}</span>
          </div>
        </div>

        {/* Choose Button */}
        <div className="flex flex-col justify-center">
          <button
            onClick={() => onChoose(player)}
            disabled={chosen}
            className={`px-3 py-1 rounded-md text-sm font-medium transition ${
              chosen
                ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                : "bg-yellow-300 hover:bg-yellow-400"
            }`}
          >
            {chosen ? "Selected" : "Choose"}
          </button>
        </div>
      </div>
    </div>
  );
}
