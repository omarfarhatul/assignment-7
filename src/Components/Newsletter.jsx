// src/components/Newsletter.jsx
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (!email.includes("@")) {
      setMessage("⚠️ Please enter a valid email address.");
      return;
    }
    setMessage("✅ Subscribed successfully! Thank you.");
    setEmail("");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="bg-white p-6 rounded-lg shadow-md border text-center md:text-left">
        <h3 className="font-bold text-lg text-slate-800">
          Subscribe to our Newsletter
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          Get the latest Dream 11 updates straight to your inbox.
        </p>

        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <button
            onClick={handleSubscribe}
            className="px-4 py-2 bg-yellow-300 rounded-md font-medium hover:bg-yellow-400 transition"
          >
            Subscribe
          </button>
        </div>

        {message && <div className="mt-3 text-sm text-slate-600">{message}</div>}
      </div>
    </div>
  );
}
