"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
require("@testing-library/jest-dom");
var _AdminVaccine = _interopRequireDefault(require("../../../client/src/pages/AdminVaccine"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
test('renders AdminVaccine component', function () {
  var _render = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_AdminVaccine["default"], {})),
    getByText = _render.getByText;
  var divElement = getByText('Admin Vaccine');
  expect(divElement).toBeInTheDocument();
});