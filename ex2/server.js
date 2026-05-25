const app = require("./app");
const http = require("http");

const port = 19020;
app.set("port", port);

const server = http.createServer(app);

server.listen(port);
server.on("error", (error) => {
  console.error("Server error:", error);
});
server.on("listening", () => {
  console.log("Listening on port " + port);
});
