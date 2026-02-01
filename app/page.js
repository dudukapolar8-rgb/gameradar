export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>🎮 GameRadar</h1>
      <p>Search games, compare prices and reviews.</p>

      <input
        type="text"
        placeholder="Search for a game..."
        style={{
          padding: "12px",
          marginTop: "20px",
          width: "100%",
          maxWidth: "420px",
          border: "1px solid #ccc",
          borderRadius: "6px"
        }}
      />
    </main>
  );
}
