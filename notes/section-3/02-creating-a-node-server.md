## Creating NodeJS Server

- http: Launch server, send Request
- https: Launch a SSL server
- fs:
- path:
- os:

### Node.js HTTP Module Complete Reference

[Node.js HTTP Module Complete Reference](https://www.geeksforgeeks.org/node-js/node-js-http-module-complete-reference/)

To make HTTP requests in Node.js, there is a built-in module HTTP in Node.js to transfer data over the HTTP. To use the HTTP server in the node, we need to require the HTTP module. The HTTP module creates an HTTP server that listens to server ports and gives a response back to the clien

```js
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000); //http://localhost:3000/
```

[Next: The NodeJS Lifecycle](./03-the-node-lifecycle.md)
