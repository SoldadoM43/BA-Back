// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();

const path = require("path");

const router = jsonServer.router(path.join(__dirname, "data", "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(8080, () => {
  console.log("JSON Server is running 123");
});
