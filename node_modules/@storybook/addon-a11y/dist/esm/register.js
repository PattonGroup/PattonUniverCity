import React from 'react';
import { addons, types } from '@storybook/addons';
import { ADDON_ID, PANEL_ID, PARAM_KEY } from './constants';
import { VisionDeficiency } from './components/VisionDeficiency';
import { A11YPanel } from './components/A11YPanel';
import { A11yContextProvider } from './components/A11yContext';
addons.register(ADDON_ID, function () {
  addons.add(PANEL_ID, {
    title: '',
    type: types.TOOL,
    match: function match(_ref) {
      var viewMode = _ref.viewMode;
      return viewMode === 'story';
    },
    render: function render() {
      return /*#__PURE__*/React.createElement(VisionDeficiency, null);
    }
  });
  addons.add(PANEL_ID, {
    title: 'Accessibility',
    type: types.PANEL,
    render: function render(_ref2) {
      var _ref2$active = _ref2.active,
          active = _ref2$active === void 0 ? true : _ref2$active,
          key = _ref2.key;
      return /*#__PURE__*/React.createElement(A11yContextProvider, {
        key: key,
        active: active
      }, /*#__PURE__*/React.createElement(A11YPanel, null));
    },
    paramKey: PARAM_KEY
  });
});