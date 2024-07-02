"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
require("@testing-library/jest-dom");
var _AdminCalendar = _interopRequireDefault(require("../../../client/src/pages/AdminCalendar"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
test('renders AdminCalendar component', function () {
  var _render = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_AdminCalendar["default"], {})),
    getByText = _render.getByText;
  var divElement = getByText('Admin Calendar');
  expect(divElement).toBeInTheDocument();
});