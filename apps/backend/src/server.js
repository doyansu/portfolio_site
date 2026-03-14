const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running");
});

app.get("/api/projects", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Portfolio Website",
      description: "My personal website"
    }
  ]);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
