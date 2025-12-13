// Node build-in
const http = require("http");

// Framework / 3rd Party
const express = require("express");

const app = express();

const server = http.createServer(app);

server.listen(3000); //http://localhost:3000/
