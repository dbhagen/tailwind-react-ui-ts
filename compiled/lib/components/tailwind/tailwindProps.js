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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';
var display = {
    block: PropTypes.bool,
    hidden: PropTypes.bool,
    inline: PropTypes.bool,
    inlineBlock: PropTypes.bool,
    table: PropTypes.bool,
    tableCell: PropTypes.bool,
    tableRow: PropTypes.bool,
};
var floats = {
    clearfix: PropTypes.bool,
    float: PropTypes.oneOf(['none', 'right', 'left']),
};
var overflow = {
    overflow: PropTypes.oneOf(['hidden', 'auto', 'scroll']),
    overflowX: PropTypes.oneOf(['hidden', 'auto', 'scroll']),
    overflowY: PropTypes.oneOf(['hidden', 'auto', 'scroll']),
};
var position = {
    absolute: PropTypes.bool,
    fixed: PropTypes.bool,
    inset: PropTypes.oneOfType([
        PropTypes.oneOf(['0', 'y-0', 'x-0', 'auto']),
        PropTypes.number,
    ]),
    top: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    relative: PropTypes.bool,
    static: PropTypes.bool,
};
var zIndex = {
    z: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
var typography = {
    align: PropTypes.string,
    break: PropTypes.oneOf(['words', 'normal']),
    capitalize: PropTypes.bool,
    font: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    italic: PropTypes.bool,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    tracking: PropTypes.string,
    leading: PropTypes.string,
    lineThrough: PropTypes.bool,
    lowercase: PropTypes.bool,
    normalCase: PropTypes.bool,
    noUnderline: PropTypes.bool,
    notItalic: PropTypes.bool,
    truncate: PropTypes.bool,
    underline: PropTypes.bool,
    uppercase: PropTypes.bool,
    whitespace: PropTypes.oneOf([
        'normal',
        'no-wrap',
        'pre',
        'pre-line',
        'pre-wrap',
    ]),
};
var backgrounds = {
    bg: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
var borders = {
    border: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.array,
    ]),
    borderB: PropTypes.number,
    borderL: PropTypes.number,
    borderR: PropTypes.number,
    borderT: PropTypes.number,
    rounded: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    roundedB: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    roundedBl: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    roundedBr: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    roundedL: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    roundedR: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    roundedT: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    roundedTl: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    roundedTr: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
var flexValues = [
    true,
    'row',
    'row-reverse',
    'col',
    'col-reverse',
    'no-wrap',
    'wrap',
    'wrap-reverse',
    'initial',
    1,
    'auto',
    'none',
    'grow',
    'shrink',
    'grow-0',
    'shrink-0',
];
var flexAlignment = ['start', 'center', 'end'];
var flex = {
    content: PropTypes.oneOf(__spreadArrays(flexAlignment, ['between', 'around'])),
    flex: PropTypes.oneOfType([
        PropTypes.oneOf(flexValues),
        PropTypes.arrayOf(PropTypes.oneOf(flexValues)),
    ]),
    inlineFlex: PropTypes.bool,
    items: PropTypes.oneOf(__spreadArrays(flexAlignment, ['stretch', 'baseline'])),
    self: PropTypes.oneOf(__spreadArrays(flexAlignment, ['auto', 'stretch'])),
    justify: PropTypes.oneOf(__spreadArrays(flexAlignment, ['between', 'around'])),
};
var spacingShape = {
    t: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    r: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    b: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    l: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
var spacing = {
    m: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.shape(spacingShape),
    ]),
    nm: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.shape(spacingShape),
    ]),
    p: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.shape(spacingShape),
    ]),
};
var sizing = {
    h: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxH: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    minH: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxW: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    minW: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    w: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
var misc = {
    opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    shadow: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    list: PropTypes.oneOf(['none', 'list', 'decimal']),
    outline: PropTypes.string,
    appearance: PropTypes.string,
    select: PropTypes.string,
    pointerEvents: PropTypes.string,
    fill: PropTypes.string,
};
var plugins = {
    visuallyHidden: PropTypes.bool,
    visuallyHiddenFocusable: PropTypes.bool,
    container: PropTypes.bool,
};
export var propTypes = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, display), floats), overflow), position), zIndex), typography), backgrounds), borders), flex), spacing), sizing), misc), plugins);
export var propVariants = ['hover', 'focus', 'hocus', 'sm', 'md', 'lg', 'xl'];
export default __spreadArrays(Object.keys(propTypes), propVariants.reduce(function (variantProps, variant) { return __spreadArrays(variantProps, Object.keys(propTypes).map(function (prop) { return prop + "-" + variant; })); }, []));
//# sourceMappingURL=tailwindProps.js.map