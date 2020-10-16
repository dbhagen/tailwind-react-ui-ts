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
import { withTheme } from '../theme';
import { Touchable } from '../primitives';
import { getColorShade } from '../tailwind';
export var Button = function (_a) {
    var theme = _a.theme, _b = _a.is, is = _b === void 0 ? 'button' : _b, _c = _a.children, children = _c === void 0 ? undefined : _c, _d = _a.color, color = _d === void 0 ? 'primary' : _d, _e = _a.type, type = _e === void 0 ? 'button' : _e, _f = _a.buttonStyle, buttonStyle = _f === void 0 ? 'fill' : _f, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.large, large = _h === void 0 ? false : _h, _j = _a.small, small = _j === void 0 ? false : _j, _k = _a.fullWidth, fullWidth = _k === void 0 ? false : _k, _l = _a.bg, bg = _l === void 0 ? undefined : _l, _m = _a.text, text = _m === void 0 ? undefined : _m, _o = _a.border, border = _o === void 0 ? [] : _o, _p = _a.brand, brand = _p === void 0 ? undefined : _p, rest = __rest(_a, ["theme", "is", "children", "color", "type", "buttonStyle", "disabled", "large", "small", "fullWidth", "bg", "text", "border", "brand"]);
    var props = {
        theme: theme,
        is: is,
        type: 'fill',
        border: [true, 'transparent'],
        leading: 'tight',
        p: { x: theme.spacing.md, y: theme.spacing.sm },
        rounded: theme.radius,
        opacity: 100
    };
    if (large) {
        props.p = { x: theme.spacing.lg, y: theme.spacing.md };
    }
    else if (small) {
        props.p = { x: theme.spacing.sm, y: theme.spacing.sm / 2 };
    }
    switch (buttonStyle) {
        case 'fill':
            props.bg = brand ? theme.brandColors[brand] : bg;
            props.text = brand ? theme.textColors.on[brand] : text;
            props['bg-hocus'] = getColorShade(brand ? theme.brandColors[brand] : bg, theme.highlightOffset);
            break;
        case 'outline':
            if (Array.isArray(props.border)) {
                props.border.push(brand ? theme.brandColors[brand] : border);
            }
            else {
                props.border += brand ? theme.brandColors[brand] : border;
            }
            props.text = brand ? theme.brandColors[brand] : border;
            props['bg-hocus'] = brand ? theme.brandColors[brand] : border;
            props['text-hocus'] = brand ? theme.textColors.on[brand] : text;
            break;
        case 'text':
            props.text = brand ? theme.brandColors[brand] : text;
            props['bg-hocus'] = "" + getColorShade(brand ? theme.brandColors[brand] : text, 100);
            break;
        case 'link':
            props.rounded = undefined;
            props.leading = 'normal';
            props.p = 0;
            props.underline = true;
            props.text = brand ? theme.brandColors[brand] : text;
            props['text-hocus'] = getColorShade(brand ? theme.brandColors[brand] : text, theme.highlightOffset);
            break;
        default:
            break;
    }
    if (is === 'button') {
        props.type = type;
    }
    else {
        props.role = 'button';
    }
    if (disabled) {
        props.opacity = 50;
    }
    if (fullWidth) {
        props.w = 'full';
    }
    //inlineBlock
    return (React.createElement(Touchable, __assign({}, props, rest), children));
};
export { Button as component };
export default withTheme(Button);
//# sourceMappingURL=Button.js.map