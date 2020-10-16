var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import TailwindTheme from './TailwindTheme';
// TODO: Remove Any Types
var withTheme = function (Component) {
    var WithTheme = function (props) { return (React.createElement(TailwindTheme.Consumer, null, function (theme) { return React.createElement(Component, __assign({}, props, { theme: theme })); })); };
    WithTheme.displayName = "WithTheme(" + Component.displayName + ")";
    return WithTheme;
};
export default withTheme;
//# sourceMappingURL=withTheme.js.map