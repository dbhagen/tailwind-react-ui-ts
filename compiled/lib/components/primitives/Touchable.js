var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import Base from './Base';
var focusableElements = ['input', 'select', 'textarea', 'button', 'a'];
var Touchable = /** @class */ (function (_super) {
    __extends(Touchable, _super);
    function Touchable(props) {
        var _this = _super.call(this, props) || this;
        _this.handleKeyPress = _this.handleKeyPress.bind(_this);
        return _this;
    }
    Touchable.prototype.handleKeyPress = function (e) {
        var onTouch = this.props.onTouch;
        if (onTouch &&
            ((e.key &&
                (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar')) ||
                (e.keyCode && (e.keyCode === 13 || e.keyCode === 32)))) {
            e.preventDefault();
            onTouch(e);
        }
    };
    Touchable.prototype.render = function () {
        var _a = this.props, is = _a.is, children = _a.children, tabIndex = _a.tabIndex, disabled = _a.disabled, onTouch = _a.onTouch, rest = __rest(_a, ["is", "children", "tabIndex", "disabled", "onTouch"]);
        var isSemantic = focusableElements.includes(is);
        return (React.createElement(Base, __assign({ is: is, select: "none", cursor: "pointer", pointerEvents: disabled ? 'none' : undefined, focusable: true, role: !isSemantic ? 'button' : undefined, tabIndex: tabIndex || (!isSemantic && !disabled ? 0 : undefined), opacity: disabled ? 50 : undefined, disabled: disabled, "aria-disabled": disabled || undefined, onClick: onTouch, onKeyPress: !isSemantic && !disabled ? this.handleKeyPress : undefined }, rest), children));
    };
    Touchable.defaultProps = {
        is: 'button',
        children: undefined,
        disabled: false,
        tabIndex: undefined,
        onTouch: undefined,
    };
    return Touchable;
}(React.PureComponent));
export { Touchable };
export default Touchable;
//# sourceMappingURL=Touchable.js.map