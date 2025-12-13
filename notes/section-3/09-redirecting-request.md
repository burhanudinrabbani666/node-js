## Redirecting Request

```js
=> {
  // Routing
  // http://localhost:3000/
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write(
      `<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`
    );
    res.write("</html>");
    return res.end();
  }

  // Http://localhost:3000/message this is redirecting
  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "Hello World");

    res.statusCode = 302;
    res.setHeader("Location", "/");

    return res.end();
  }

```

[Next: Parsing request Body](./10-parsing-request-body.md)
