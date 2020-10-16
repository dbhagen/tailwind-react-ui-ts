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
import Button from './Button';
/**
 * @see See [Button](#button-2) for API. Sets `buttonStyle` prop to `fill`.
 */
var FillButton = function (props) { return React.createElement(Button, __assign({}, props, { buttonStyle: "fill" })); };
export default FillButton;
//# sourceMappingURL=FillButton.js.map