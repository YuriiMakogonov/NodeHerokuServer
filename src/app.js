const express = require("express");

const app = express();
// определяем обработчик для маршрута "/"
app.get("/", function(request, response){

    // send response
    response.send("<h2>Run Express!</h2>");
});
// start listening port 3000
app.listen(3000);