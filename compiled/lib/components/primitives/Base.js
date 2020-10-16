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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import classnames from 'classnames';
import { withTheme } from '../theme';
import { filterProps } from '../utils';
import { getTailwindClassNames, tailwindProps } from '../tailwind';
var Base = function (_a) {
    var theme = _a.theme, _b = _a.is, is = _b === void 0 ? 'div' : _b, _c = _a.children, children = _c === void 0 ? undefined : _c, _d = _a.className, className = _d === void 0 ? undefined : _d, _e = _a.innerRef, innerRef = _e === void 0 ? undefined : _e, rest = __rest(_a, ["theme", "is", "children", "className", "innerRef"]);
    var WrappedComponent = is;
    return (React.createElement(WrappedComponent, __assign({}, filterProps(rest, tailwindProps), { className: classnames(getTailwindClassNames(__assign(__assign({}, rest), { 'outine-focus': 'none', 'shadow-focus': 'outline' }), { prefix: theme.prefix }), className), ref: innerRef }), children));
};
export { Base as component };
export default withTheme(Base);
//# sourceMappingURL=Base.js.map