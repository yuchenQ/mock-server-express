"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.app = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _express = _interopRequireDefault(require("express"));

/** @format */
var app = (0, _express["default"])();
exports["default"] = exports.app = app;
app.use(_bodyParser["default"].urlencoded({
  limit: '20mb',
  extended: true
}));
app.use(_bodyParser["default"].json({
  limit: '20mb'
}));
app.use(function (err, req, res, next) {
  res.sendStatus(500);
  next();
});
app.listen(8000, function () {
  console.log("the server is start at port ".concat(8000));
});