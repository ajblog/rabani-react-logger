"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ErrorBoundaryHoc", {
  enumerable: true,
  get: function get() {
    return _ErrorBoundaryHoc.ErrorBoundaryHoc;
  }
});
Object.defineProperty(exports, "ErrorBoundaryProvider", {
  enumerable: true,
  get: function get() {
    return _ErrorBoundaryProvider.default;
  }
});

var _ErrorBoundaryHoc = require("./components/ErrorBoundaryHoc");

var _ErrorBoundaryProvider = _interopRequireDefault(require("./components/ErrorBoundaryProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }