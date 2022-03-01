const express = require("express");
const CryptoJS = require("crypto-js");
const port = process.env.PORT || 8080;

const app = express();

app.get("/", function (request, response) {

    console.log('request');

    let test = 'secret';
    let testCrypto = CryptoJS.PBKDF2(test, 'salt', {keySize: 256/32, iterations: 2048, hasher: CryptoJS.algo.SHA256});
    console.log('testCrypto', testCrypto);

    let signature = CryptoJS.enc.Hex.stringify(testCrypto);
    console.log('signature', signature);
    response.send("Generate Signature APP2 signature: " + signature);
});

app.listen(port);
