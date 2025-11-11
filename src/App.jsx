// src/App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import AvailablePage from "./pages/AvailablePage";
import SelectedPage from "./pages/SelectedPage";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";

function App() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // Load player data
  useEffect(() => {
    fetch("/players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  // Add player to selected list
  const handleChoose = (player) => {
    if (selectedPlayers.some((p) => p.id === player.id)) return;
    setSelectedPlayers([...selectedPlayers, player]);
  };

  // Remove player
  const handleRemove = (player) => {
    setSelectedPlayers(selectedPlayers.filter((p) => p.id !== player.id));
  };

  // Clear all selected
  const handleClear = () => {
    setSelectedPlayers([]);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50">
        {/* Banner */}
        <Banner />

        {/* Routes */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <AvailablePage
                  players={players}
                  selectedPlayers={selectedPlayers}
                  onChoose={handleChoose}
                />
              }
            />
            <Route
              path="/selected"
              element={
                <SelectedPage
                  selectedPlayers={selectedPlayers}
                  onRemove={handleRemove}
                  onClear={handleClear}
                />
              }
            />
          </Routes>
        </main>

        {/* Newsletter + Footer */}
        <section id="newsletter">
          <Newsletter />
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
