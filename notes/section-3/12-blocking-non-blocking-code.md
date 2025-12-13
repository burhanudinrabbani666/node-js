## Blocking adn Non Blocking code

```js
fs.writeFileSync("user-input.txt", userInput); // This Blocked code
res.statusCode = 302;
res.setHeader("Location", "/");

return res.end();
```

To: ⬇️

```js
fs.writeFile("user-input.txt", userInput, (err) => {
  res.statusCode = 302;
  res.setHeader("Location", "/");

  return res.end();
});
```

[Next NodeJS Behind the Scene](./13-nodejs-behind-the-scene.md)
