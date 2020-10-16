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
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { filterProps } from '../utils';
import tailwindProps, { propTypes } from './tailwindProps';
import getTailwindClassNames from './getTailwindClassNames';
// TODO: Remove Any Types
var withTailwind = function (Component, _a) {
    var ignore = (_a === void 0 ? { ignore: [] } : _a).ignore;
    var WithTailwind = function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (React.createElement(Component, __assign({}, filterProps(props, tailwindProps.filter(function (prop) { return !ignore.includes(prop); })), { className: classnames([
                getTailwindClassNames(props, { ignore: ignore }),
                className,
            ]) })));
    };
    WithTailwind.displayName = "WithTailwind(" + Component.displayName + ")";
    WithTailwind.propTypes = __assign({ className: PropTypes.string }, propTypes);
    WithTailwind.defaultProps = {
        className: undefined,
    };
    return WithTailwind;
};
export default withTailwind;
//# sourceMappingURL=withTailwind.js.map