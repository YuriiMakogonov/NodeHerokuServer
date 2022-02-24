const express = require("express");
const port = process.env.PORT || 8080;

const app = express();
// определяем обработчик для маршрута "/"
app.get("/", function (request, response) {

    console.log('request');
    // send response
    response.send("Generate Signature APP");
});
// start listening port 3000
app.listen(port);
