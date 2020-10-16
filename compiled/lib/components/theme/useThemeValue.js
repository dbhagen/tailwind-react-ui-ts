import { tailwindPropToClassName } from '../tailwind';
export default (function (prefix, values, userClassNames) {
    if (userClassNames === void 0) { userClassNames = ''; }
    if (userClassNames.includes(prefix)) {
        return false;
    }
    return tailwindPropToClassName(undefined, values, prefix);
});
//# sourceMappingURL=useThemeValue.js.map