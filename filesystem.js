const http = require("http");
const fs = require("fs");

Server = http.createServer((req, res) => {
  // if(req)

  fs.readFile("car.html", (err, data) => {
    if (data) {
      console.log("this is html page", data);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data)
      res.end()
      
    } else {
      res.writeHead(300, { "Content-Type": "text/html" });
      res.write("errroorrrr");
      res.end();
    }
  });
});
Server.listen(9000, () => console.log("server is running sucessfully"));
