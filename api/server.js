var http = require('http');
var app = require('./app.js');
var port = 8080;
var server = http.createServer(app);
server.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Example app listening at http://localhost:" + port);
    }
});
//# sourceMappingURL=server.js.map