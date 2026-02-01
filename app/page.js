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
