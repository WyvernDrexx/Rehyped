require("dotenv").config();
const files = require("serve-static");
const cache = require("http-cache-middleware");
const express = require("express");
const path = require("path");
const app = express();
const http = require("http");
const https = require("https");
const fs = require("fs");
const compression = require("compression");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const favicon = require("serve-favicon");

const serve = files(path.join(__dirname, "build", "index.html"), {
  lastModified: false,
  setHeaders: (res, path) => {
    res.setHeader("cache-control", "public, no-cache, max-age=604800");
  },
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let PORT = process.env.PORT || 3000;
app.use(helmet());
app.use(express.static(path.join(__dirname, "build")));
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(compression());
app.use(cache());
app.use(serve);

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

if (process.env.NODE_ENV && process.env.NODE_ENV === "production") {
  PORT = 443;
  var key = fs.readFileSync("/etc/letsencrypt/live/rehyped.com/privkey.pem");

  var cert = fs.readFileSync("/etc/letsencrypt/live/rehyped.com/cert.pem");

  var ca = fs.readFileSync("/etc/letsencrypt/live/rehyped.com/chain.pem");

  const credentials = {
    key,
    cert,
    ca,
  };
  const httpsServer = https.createServer(credentials, app);
  const expressHttpServer = express();

  expressHttpServer.use((req, res) => {
    res.redirect("https://www.rehyped.com/");
  });

  expressHttpServer.listen(80, () => {
    console.log("Serving HTTP Server on PORT: " + 80);
  });

  httpsServer.listen(PORT, (_) => {
    console.log("Serving HTTPS Server on PORT: " + PORT);
  });
} else {
  const httpServer = http.createServer(app);
  httpServer.listen(PORT, (_) => {
    console.log("Serving HTTP Server on PORT: " + PORT);
  });
}
