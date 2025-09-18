const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(express.static("."));
app.use(bodyParser.json());

// Update homework
app.post("/update-homework", (req, res) => {
  const { text } = req.body;
  fs.writeFileSync("homework.json", JSON.stringify({ text }, null, 2));
  res.json({ status: "updated" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
