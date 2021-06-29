"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ErrorBoundaryProvider extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true
    };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // HERE I WILL REGISTER THE LOG TO THE ELASTIC SERVER
    this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
      hasError: true
    }));
    console.log(error, errorInfo);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      if (this.props.errorComponent) {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.props.errorComponent());
      } else {
        return /*#__PURE__*/_react.default.createElement("div", null, "YOU HAVE AN ERROR!!!");
      }
    }

    return this.props.children;
  }

}

exports.default = ErrorBoundaryProvider;
ErrorBoundaryProvider.propTypes = {
  errorComponent: _propTypes.default.node
};