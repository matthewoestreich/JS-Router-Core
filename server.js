const path = require("node:path");
const express = require("express");

const app = express();

// Let our index.html handle any GET route...
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./index.html"));
});

process.env.PORT = process.env.PORT || 3000;

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});