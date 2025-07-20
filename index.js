const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Deployed via Jenkins + Docker!");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

