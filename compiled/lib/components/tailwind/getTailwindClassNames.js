var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { paramCase } from 'param-case';
import tailwindPropToClassName from './tailwindPropToClassName';
import tailwindProps, { propVariants } from './tailwindProps';
var hasUpperCase = function (str) { return str.toLowerCase() !== str; };
var getTailwindClassNames = function (props, _a) {
    var _b = _a === void 0 ? { ignore: [], prefix: '' } : _a, ignore = _b.ignore, prefix = _b.prefix;
    return !!props &&
        Object.keys(props).reduce(function (twClasses, key) {
            if (ignore !== undefined &&
                ignore.includes(key) ||
                props[key] === false ||
                typeof props[key] === 'undefined')
                return twClasses;
            var type = key.indexOf('-') > 0 ? key.substring(0, key.indexOf('-')) : key;
            var variant = key.indexOf('-') > 0 ? key.substring(key.indexOf('-') + 1) : key;
            if (!tailwindProps.includes(type))
                return twClasses;
            if (hasUpperCase(type)) {
                type = paramCase(type);
            }
            if (propVariants.includes(variant)) {
                if (variant === 'hocus') {
                    return __spreadArrays(twClasses, [
                        tailwindPropToClassName("hover:" + type, props[key], prefix),
                        tailwindPropToClassName("focus:" + type, props[key], prefix),
                    ]);
                }
                return __spreadArrays(twClasses, [
                    tailwindPropToClassName(variant + ":" + type, props[key], prefix),
                ]);
            }
            return __spreadArrays(twClasses, [tailwindPropToClassName(type, props[key], prefix)]);
        }, []);
};
export default getTailwindClassNames;
//# sourceMappingURL=getTailwindClassNames.js.map