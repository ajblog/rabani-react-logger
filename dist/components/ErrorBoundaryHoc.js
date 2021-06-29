"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorBoundaryHoc = void 0;

var _react = _interopRequireDefault(require("react"));

var _ShowError = _interopRequireDefault(require("../../ShowError"));

var _ErrorBoundaryProvider = _interopRequireDefault(require("./ErrorBoundaryProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ErrorBoundaryHoc = (Component, ErrorComponent) => {
  return class extends _react.default.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return /*#__PURE__*/_react.default.createElement(_ErrorBoundaryProvider.default, {
        errorComponent: ErrorComponent
      }, /*#__PURE__*/_react.default.createElement(Component, null));
    }

  };
};

exports.ErrorBoundaryHoc = ErrorBoundaryHoc;