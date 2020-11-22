const express = require("express");
const app = express();
const port = 5050;
const httpProxy = require("http-proxy");
const proxy = httpProxy.createProxyServer({});
const normalizeUrl = require("normalize-url");

app.get("/", (req, res) => {
  if (req.url.includes("https")) {
    res.send("Proxy does not support HTTPS.");
  } else if (req.url.includes("http") || req.url.length > 10) {
    const proxyPath = req.url.substring(6);
    let newUrl = normalizeUrl(proxyPath);

    console.log(newUrl);
    proxy.web(req, res, {
      changeOrigin: true,
      target: newUrl,
    });
  } else {
    res.send("Measter Proxy Server");
  }
});

app.listen(port, () => {
  console.log("Proxy listening on port 5050");
});
