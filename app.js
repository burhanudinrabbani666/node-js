const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Routing
  // http://localhost:3000/
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write(
      `<body><form action="/message" method="POST"><input type="text" name="user-input"><button type="submit">Send</button></form></body>`
    );
    res.write("</html>");
    return res.end();
  }

  // Http://localhost:3000/message
  if (url === "/message" && method === "POST") {
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

    res.statusCode = 302;
    res.setHeader("Location", "/");

    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Second page</title></head>");
  res.write("<body><h1>Hello From NodeJS</h1></body>");
  res.write("</html>");

  res.end();
});

server.listen(3000); //http://localhost:3000/
