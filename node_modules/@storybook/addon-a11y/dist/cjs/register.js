"use strict";

var _react = _interopRequireDefault(require("react"));

var _addons = require("@storybook/addons");

var _constants = require("./constants");

var _VisionDeficiency = require("./components/VisionDeficiency");

var _A11YPanel = require("./components/A11YPanel");

var _A11yContext = require("./components/A11yContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_addons.addons.register(_constants.ADDON_ID, function () {
  _addons.addons.add(_constants.PANEL_ID, {
    title: '',
    type: _addons.types.TOOL,
    match: function match(_ref) {
      var viewMode = _ref.viewMode;
      return viewMode === 'story';
    },
    render: function render() {
      return /*#__PURE__*/_react.default.createElement(_VisionDeficiency.VisionDeficiency, null);
    }
  });

  _addons.addons.add(_constants.PANEL_ID, {
    title: 'Accessibility',
    type: _addons.types.PANEL,
    render: function render(_ref2) {
      var _ref2$active = _ref2.active,
          active = _ref2$active === void 0 ? true : _ref2$active,
          key = _ref2.key;
      return /*#__PURE__*/_react.default.createElement(_A11yContext.A11yContextProvider, {
        key: key,
        active: active
      }, /*#__PURE__*/_react.default.createElement(_A11YPanel.A11YPanel, null));
    },
    paramKey: _constants.PARAM_KEY
  });
});