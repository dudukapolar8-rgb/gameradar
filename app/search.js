export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const game = searchParams.get("game");

  if (!game) {
    return new Response(JSON.stringify({ error: "Digite um jogo" }), { status: 400 });
  }

  // MOCK DE REVIEWS
  const reviews = [
    { source: "Metacritic", score: Math.floor(Math.random() * 100) },
    { source: "Steam", score: Math.floor(Math.random() * 100) },
    { source: "OpenCritic", score: Math.floor(Math.random() * 100) },
  ];

  // MOCK DE PREÇOS
  const prices = [
    { platform: "Steam", price: Math.random() * 60 + 10 },
    { platform: "Epic Games", price: Math.random() * 60 + 10 },
    { platform: "GOG", price: Math.random() * 60 + 10 },
    { platform: "PlayStation", price: Math.random() * 70 + 10 },
    { platform: "Xbox", price: Math.random() * 70 + 10 },
  ];

  // Ordenar preços do mais barato para o mais caro
  prices.sort((a, b) => a.price - b.price);

  return new Response(
    JSON.stringify({ game, reviews, prices }),
    { headers: { "Content-Type": "application/json" } }
  );
}
export default async function handler(req, res) {
  const { jogo } = req.query;
  if (!jogo) return res.status(400).json({ error: "Digite o nome de um jogo" });

  // Simula reviews de várias fontes
  const reviews = [
    { source: "Metacritic", score: Math.floor(Math.random() * 50 + 50) },
    { source: "Steam", score: Math.floor(Math.random() * 50 + 50) },
    { source: "OpenCritic", score: Math.floor(Math.random() * 50 + 50) }
  ];

  // Simula preços em várias plataformas
  const prices = [
    { platform: "Steam", price: (Math.random() * 60).toFixed(2) },
    { platform: "Epic Games", price: (Math.random() * 60).toFixed(2) },
    { platform: "GOG", price: (Math.random() * 60).toFixed(2) },
    { platform: "PlayStation", price: (Math.random() * 60).toFixed(2) },
    { platform: "Xbox", price: (Math.random() * 60).toFixed(2) }
  ];

  // Ordena do mais barato para o mais caro
  prices.sort((a, b) => a.price - b.price);

  res.status(200).json({ reviews, prices });
}
