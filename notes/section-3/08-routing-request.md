## Routing Request

[Geeks: Routing in NodeJS](https://www.geeksforgeeks.org/node-js/routing-in-node-js/)

Routing is the process of deciding how a server should respond to different requests made by users. When you visit a website or use an app, your browser sends a request to the server. Routing determines how the server handles these requests based on the URL you visit and the type of request (such as viewing a page, submitting a form, or deleting something).

```js
const server = http.createServer((req, res) => {
  // Routing
  // http://localhost:3000/
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write(
      `<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`
    );
    res.write("</html>");

    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Second page</title></head>");
  res.write("<body><h1>Hello From NodeJS</h1></body>");
  res.write("</html>");

  res.end();
});
```

[Next: Redirecting Request](./09-redirecting-request.md)
