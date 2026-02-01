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
