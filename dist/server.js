"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
typeorm_1.createConnection().then(async (connection) => {
    const app = require('./db/app.js');
    const http = require('http');
    const port = 8080;
    const server = http.createServer(app);
    server.listen(port, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(`Example app listening at http://localhost:${port}`);
        }
    });
});
//# sourceMappingURL=server.js.map