## Understanding Event Driver

I moved statusCode, setHeader, res.end() to the req.end scope and added a return before req.on("end") so that the code is executed first and doesn't cause page changes and errors.

```js
if (url === "/message" && method === "POST") {
  const body = [];
  req.on("data", (chunk) => {
    console.log(chunk);
    body.push(chunk);
  });
  return req.on("end", () => {
    // make sure this code being executed
    const parsedBody = Buffer.concat(body).toString();
    const userInput = parsedBody.split("=")[1];
    fs.writeFileSync("user-input.txt", userInput);

    res.statusCode = 302;
    res.setHeader("Location", "/");

    return res.end();
  });
}
```

[Next: Blicking and non Blocking Code](./12-blocking-non-blocking-code.md)
