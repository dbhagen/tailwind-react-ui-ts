import React from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash.merge';
import defaultTheme from './defaultTheme';
import TailwindTheme from './TailwindTheme';
// TODO: Remove Any Types
var TailwindThemeProvider = function (_a) {
    var theme = _a.theme, children = _a.children;
    var mergedTheme = merge({}, defaultTheme, theme);
    return (React.createElement(TailwindTheme.Provider, { value: mergedTheme }, children));
};
TailwindThemeProvider.propTypes = {
    theme: PropTypes.shape({}),
    children: PropTypes.node,
};
TailwindThemeProvider.defaultProps = {
    theme: {},
    children: undefined,
};
export default TailwindThemeProvider;
//# sourceMappingURL=TailwindThemeProvider.js.map