const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Updated via Jenkins CI/CD 🚀");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

