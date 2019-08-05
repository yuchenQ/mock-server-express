"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _compression = _interopRequireDefault(require("compression"));

var _addServicesToRoutes = _interopRequireDefault(require("./addServicesToRoutes"));

/** @format */
var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(servicesDir) {
    var app, router;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            app = (0, _express["default"])();
            router = _express["default"].Router;
            _context.next = 4;
            return (0, _addServicesToRoutes["default"])(router)(servicesDir);

          case 4:
            app.use((0, _cors["default"])());
            app.use((0, _compression["default"])());
            app.use(_bodyParser["default"].json());
            app.use(router);
            app.use(function (req, res) {
              console.error("".concat(req.path, " is missing"));
              res.status(404).end();
            });
            return _context.abrupt("return", app);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;