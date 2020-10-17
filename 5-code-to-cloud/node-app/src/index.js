const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve("public")));

app.get("/hi", (_, res) => {
  res.send("👋");
});

const port = 3000;

app.listen(port, () => {
  console.log(`✅ Server listening on port ${port}`);
});

module.exports = {
  app,
};
