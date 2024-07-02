"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
require("@testing-library/jest-dom");
var _AdminBooking = _interopRequireDefault(require("../../../client/src/pages/AdminBooking"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
test('renders AdminBooking component', function () {
  var _render = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_AdminBooking["default"], {})),
    getByText = _render.getByText;
  var divElement = getByText('Admin Booking');
  expect(divElement).toBeInTheDocument();
});