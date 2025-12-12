## Sending Respons

This object is created internally by an HTTP server, not by the user. It is passed as the second parameter to the 'request' event.

### res.end()

This method signals to the server that all of the response headers and body have been sent; that server should consider this message complete. The method, response.end(), MUST be called on each response.

### res.write()

This sends a chunk of the response body. This method may be called multiple times to provide successive parts of the body.

### ress.setHeader()

Sets a single header value for implicit headers. If this header already exists in the to-be-sent headers, its value will be replaced. Use an array of strings here to send multiple headers with the same name. Non-string values will be stored without modification. Therefore, response.getHeader() may return non-string values. However, the non-string values will be converted to strings for network transmission. The same response object is returned to the caller, to enable call chaining.

```js
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Second page</title></head>");
  res.write("<body><h1>Hello From NodeJS</h1></body>");
  res.write("</html>");

  res.end();
});
```

[Next: Request Respons Headers](./07-request-respons-headers.md)
