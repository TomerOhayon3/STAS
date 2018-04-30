var express = require('express');
var app = express();
app.listen(8000);

app.use(express.static('public'));

app.get('./public', function (request, response) {
    console.log("Hello World");
    response.send("Hey, hello from the server!");
});

