"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StateSelector;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StateSelector(_ref) {
  var state = _ref.state,
      states = _ref.states,
      onSelect = _ref.onSelect;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "label",
      { htmlFor: "state" },
      "State"
    ),
    _react2.default.createElement(
      "select",
      {
        value: state,
        onChange: function onChange(e) {
          return onSelect(e.target.value);
        },
        name: "state",
        id: "state"
      },
      states.map(function (item) {
        return _react2.default.createElement(
          "option",
          { key: item.abbreviation, value: item.abbreviation },
          item.name
        );
      })
    )
  );
}