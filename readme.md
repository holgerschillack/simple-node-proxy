# Simple Node Proxy

## Installation

- run `npm i` with Node JS >=12
- run with `npm start` or with an alway on service like `pm2``

## Function

- each `URL` request to `proxy-url/{URL}` will be proxied by the proxy-domain

## General Proxy information

If your app hosted on `domain1.com` wants to request images from somewhere else, the requests will likely be blocked due to CORS policies.
Therefore you can host the Simple Node Proxy on the same domain (e.g. a subdomain or just ip:port) and proxy all request for external ressources to the path `proxy-url/external-image-source` (e.g. proxy.domain1.com/www.external-image-url.com/1.jpg)

## HTTPS/SSL

- for HTTPS support please add your cert into the cert folder and adjust the name/pass file in the source code

## Creating self-signed certificate for localhost testing

- install mkcert from `https://github.com/FiloSottile/mkcert` (e.g. `brew install mkcert`)
- for firefox support install also `brew install nss`
- run e.g. `mkcert -key-file key.pem -cert-file cert.pem localhost 127.0.0.1` to generate cert and key file
- run `mkcert -install` to install certificates on local machine
- copy `key.pem` and `cert.pem` file into `src/cert/`
