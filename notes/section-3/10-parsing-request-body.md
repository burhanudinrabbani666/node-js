## Parsing Request Body

```js
req.on();
```

Adds the listener function to the end of the listeners array for the event named eventName. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times.

How req.on() works
The req (request) object passed to your server's request handler is an instance of http.IncomingMessage, which inherits from stream.Readable. All streams in Node.js are instances of EventEmitter, giving them access to the .on() method to register listeners for specific events.
The most common events to listen for are:

- 'data': This event is emitted when a chunk of data (the request body) is available to be read.
- 'end': This event is emitted once the entire request body has been received.
- 'error': This event is emitted if there is an error receiving the reques

```js
const body = [];
req.on("data", (chunk) => {
  console.log(chunk);
  body.push(chunk);
});
req.on("end", () => {
  const parsedBody = Buffer.concat(body).toString();
  const userInput = parsedBody.split("=")[1];
  fs.writeFileSync("user-input.txt", userInput);
});
```

[Next: Unerstanding Event Driver](./11-understanding-event-driver.md)
