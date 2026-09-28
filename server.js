const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <h1>🌐 Yamato</h1>
    <p>Der Yamato-Server läuft! 🔥</p>
  `);
});

app.get("/api/status", (req, res) => {
  res.json({
    online: true,
    platform: "Yamato",
    message: "Yamato läuft!"
  });
});

app.listen(PORT, () => {
  console.log("Yamato läuft auf Port " + PORT);
});
