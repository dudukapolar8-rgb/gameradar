"use client";

import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchGame = async () => {
    if (!query) return;
    setLoading(true);
    setResults(null);
    try {
      const res = await fetch(`/api/search?game=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(data);
    } catch (e) {
      alert("Erro ao buscar dados do jogo");
    }
    setLoading(false);
  };

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">🎮 GameRadar</h1>
      <p className="mb-6">Busque jogos, compare preços e reviews de várias plataformas.</p>

      <div className="flex mb-6">
        <input
          className="flex-1 p-2 border rounded-l"
          type="text"
          placeholder="Digite o nome do jogo..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchGame()}
        />
        <button
          className="bg-blue-600 text-white px-4 rounded-r"
          onClick={searchGame}
        >
          Buscar
        </button>
      </div>

      {loading && <p>Carregando...</p>}

      {results && (
        <div>
          <h2 className="text-2xl font-bold mb-2">Reviews</h2>
          <ul className="mb-6">
            {results.reviews.map((r, i) => (
              <li key={i}>
                <strong>{r.source}:</strong> {r.score}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mb-2">Preços</h2>
          <ul>
            {results.prices.map((p, i) => (
              <li key={i}>
                <strong>{p.platform}:</strong> ${p.price.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}

"use client";

import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchGame = async () => {
    if (!query) return;
    setLoading(true);
    setResults(null);
    try {
      const res = await fetch(`/api/search?game=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(data);
    } catch (e) {
      alert("Erro ao buscar dados do jogo");
    }
    setLoading(false);
  };

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-blue-500">🎮 GameRadar</h1>
      <p className="mb-8 text-gray-300">Busque jogos, compare preços e reviews de várias plataformas.</p>

      <div className="flex mb-8">
        <input
          className="flex-1 p-3 border border-gray-600 rounded-l-lg bg-gray-800 text-white"
          type="text"
          placeholder="Digite o nome do jogo..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchGame()}
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-r-lg font-bold transition"
          onClick={searchGame}
        >
          Buscar
        </button>
      </div>

      {loading && <p className="text-gray-300">Carregando...</p>}

      {results && (
        <div>
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {results.reviews.map((r, i) => (
              <div key={i} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
                <h3 className="font-bold text-lg">{r.source}</h3>
                <p className="text-green-400 font-bold">{r.score}/100</p>
                {r.score > 85 && (
                  <span className="bg-blue-600 px-2 rounded-full text-sm mt-2 inline-block">Top review</span>
                )}
              </div>
            ))}
          </div>

          <h2 className="text-3
