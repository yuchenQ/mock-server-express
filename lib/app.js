"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const express_1 = tslib_1.__importDefault(require("express"));
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ limit: '20mb', extended: true }));
app.use(body_parser_1.default.json({ limit: '20mb' }));
app.use(function (err, req, res, next) {
    res.sendStatus(500);
    next();
});
app.listen(8000, function () {
    console.log(`the server is start at port ${8000}`);
});
exports.default = app;
