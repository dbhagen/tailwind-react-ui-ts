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
import includes from 'lodash.includes';
export default (function (componentProps, filterList) {
    return Object.keys(componentProps).reduce(function (newProps, prop) {
        var _a;
        if (includes(filterList, prop)) {
            return newProps;
        }
        return __assign(__assign({}, newProps), (_a = {}, _a[prop] = componentProps[prop], _a));
    }, {});
});
//# sourceMappingURL=filterProps.js.map