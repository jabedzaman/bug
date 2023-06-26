import http from "http";
import Spotify from "@spotidl/core/dist";

// Initialize Spotify API with Auth Creds
// const spotify = new Spotify({})

const server = http.createServer((req, res) => {
  res.end("Hello World!");
});

server.listen(5000, () => {
  console.log("Server is running...");
});
