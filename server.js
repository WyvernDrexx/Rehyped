require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const http = require("http");
const https = require("https");
const fs = require("fs");

let PORT = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, "build")));

// app.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// if (process.env.NODE_ENV && process.env.NODE_ENV === "production") {
//   PORT = 443;
//   var key = fs.readFileSync(
//     "/etc/letsencrypt/live/rehyped.com/privkey.pem",
//     "utf-8"
//   );

//   var certificate = fs.readFileSync(
//     "/etc/letsencrypt/live/rehyped.com/cert.pem",
//     "utf-8"
//   );

//   var ca = fs.readFileSync(
//     "/etc/letsencrypt/live/rehyped.com/chain.pem",
//     "utf-8"
//   );

//   const credentials = {
//     key,
//     certificate,
//     ca
//   };
//   const httpsServer = https.createServer(credentials, app);
//   const expressHttpServer = express();

//   expressHttpServer.use((req, res) => {
//     res.redirect("https://www.rehyped.com/");
//   });

//   expressHttpServer.listen(80, () => {
//     console.log("Serving HTTP Server on PORT: " + 80);
//   })

//   httpsServer.listen(PORT, _ => {
//     console.log("Serving HTTPS Server on PORT: " + PORT);
//   });
// } else {
//   const httpServer = http.createServer(app);
//   httpServer.listen(PORT, _ => {
//     console.log("Serving HTTP Server on PORT: " + PORT);
//   });
// }

//...

app.use(express.static(__dirname + '/public', { dotfiles: 'allow' } ));
app.listen(80, _ => {
  console.log("listening 80");
});