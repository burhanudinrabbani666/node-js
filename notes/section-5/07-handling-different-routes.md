## Handling Different Routes

### res.send()

```js
app.use("/add-product", (req, res, next) => {
  console.log("in The middleWare");
  res.send(`<h1>Add Prodoct page</h1>`);
});

// Put this path in the bottom to make last filtering
app.use("/", (req, res, next) => {
  console.log("in Another The middleWare");
  res.send(`<h1>Hello From Express</h1>`);
});
```

[Next: Parsing Incoming Request](./08-parsing-incoming-request.md)
