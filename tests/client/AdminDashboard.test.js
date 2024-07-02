"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
require("@testing-library/jest-dom");
var _AdminDashboard = _interopRequireDefault(require("../../../client/src/pages/AdminDashboard"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
describe('AdminDashboard Component', function () {
  test('renders component correctly', function () {
    (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_AdminDashboard["default"], {}));
    var title = _react2.screen.getByRole('heading', {
      name: /YUKIMITO/i
    });
    expect(title).toBeInTheDocument();
    expect(_react2.screen.getByText('LOG OUT')).toBeInTheDocument();
    expect(_react2.screen.getByAltText('cartoon dog')).toBeInTheDocument();
  });
  test('logout button click triggers logout function', function () {
    (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_AdminDashboard["default"], {}));
    var localStorageClearMock = jest.spyOn(global.localStorage, 'clear');
    localStorageClearMock.mockImplementation(function () {});
    _react2.fireEvent.click(_react2.screen.getByText('LOG OUT'));
    expect(localStorageClearMock).toHaveBeenCalled();
  });
});