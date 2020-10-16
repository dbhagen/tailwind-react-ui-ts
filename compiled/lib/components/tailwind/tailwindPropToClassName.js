var getArray = function (value) { return (Array.isArray(value) ? value : [value]); };
var splitProp = function (prop) {
    var utility = prop.substring(prop.indexOf(':') + 1);
    return prop.indexOf(':') !== -1
        ? { utility: utility, variant: prop.substring(0, prop.indexOf(':')) }
        : { utility: utility };
};
var createClassName = function (_a) {
    var utility = _a.utility, value = _a.value, variant = _a.variant, _b = _a.prefix, prefix = _b === void 0 ? '' : _b;
    return "" + (variant ? variant + ":" : '') + prefix + utility + (value !== undefined ? "-" + value : '');
};
export default (function (prop, values, prefix) {
    var propType = typeof values;
    if (!propType)
        return '';
    var _a = prop !== undefined ? splitProp(prop) : { utility: undefined, variant: undefined }, utility = _a.utility, variant = _a.variant;
    if (propType === 'boolean') {
        return createClassName({ utility: utility, variant: variant, prefix: prefix });
    }
    if (propType === 'object' && !Array.isArray(values)) {
        return Object.keys(values).map(function (key) {
            return createClassName({
                prefix: prefix,
                utility: "" + utility + key,
                variant: variant,
                value: values[key],
            });
        });
    }
    return getArray(values)
        .map(function (value) {
        if (typeof value === 'undefined') {
            return '';
        }
        if (typeof value === 'boolean') {
            return createClassName({ utility: utility, variant: variant, prefix: prefix });
        }
        return createClassName({
            prefix: prefix,
            utility: utility,
            variant: variant,
            value: utility !== value ? value : undefined,
        });
    })
        .filter(function (value) { return !!value; })
        .join(' ');
});
//# sourceMappingURL=tailwindPropToClassName.js.map