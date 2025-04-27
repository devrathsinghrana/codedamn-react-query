const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const favLangs = ["html", "css", "javascript"];

// MIddleware - we are able to send and receive json posts
app.use(express.json());

// MIddleware - cors error resolution
app.use(cors());

app.get("/api/get-records", (req, res) => {
  res.json({ langs: favLangs });
});

app.post("/api/create-record", (req, res) => {
  const record = req.body.record;
  favLangs.push(record);
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
