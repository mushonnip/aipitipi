const parser = require("iptv-playlist-parser");
const cheerio = require("cheerio");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const port = process.env.VITE_SERVER_PORT;
const url = process.env.PLAYLIST_URL

app.use(cors())

app.get("/", (req, res) => {
  fetch(url)
    .then((res) => res.text())
    .then((body) => {
      const $ = cheerio.load(body);
      const m3u = $(".entry-content").text();

      const playlist = parser.parse(removeInvalidLine(m3u));
      res.send(playlist);
    });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});

const removeInvalidLine = (m3u) => {
  return m3u
    .split("\n")
    .filter((line) => line.startsWith("#") || line.startsWith("http"))
    .join("\n");
};


