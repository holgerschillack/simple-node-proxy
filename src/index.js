// Listen on a specific host via the HOST environment variable
// e.g. 0.0.0.0
const host = process.env.HOST || "0.0.0.0";
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 5050;

const cors_proxy = require("cors-anywhere");
const fs = require("fs");

let key, cert;
try {
  key = fs.readFileSync("src/cert/key.pem");
  cert = fs.readFileSync("src/cert/cert.pem");
} catch (err) {
  console.log("No cert found!", err);
}

cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    removeHeaders: ["cookie", "cookie2"],
    // httpsOptions: {
    //   // pfx: fs.readFileSync("./cert/cert.pfx"),
    //   // passphrase: "cert",
    //   cert: cert,
    //   key: key,
    // },
  })
  .listen(port, host, function () {
    console.log("Proxy running => http://" + host + ":" + port + "/");
  });
