const fs = require("fs");

function requestHandler(req, res) {
  const url = req.url;
  const method = req.method;

  // Http://localhost:3000/
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
    return req.on("end", () => {
      // make sure this code being executed
      const parsedBody = Buffer.concat(body).toString();
      const userInput = parsedBody.split("=")[1];

      fs.writeFile("user-input.txt", userInput, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");

        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Second page</title></head>");
  res.write("<body><h1>Hello From NodeJS</h1></body>");
  res.write("</html>");

  res.end();
}

module.exports = requestHandler;
