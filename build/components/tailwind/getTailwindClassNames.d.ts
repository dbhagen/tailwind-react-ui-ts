declare const getTailwindClassNames: (props: Object, { ignore, prefix }?: {
    ignore?: any;
    prefix?: string | undefined;
}) => (string | string[])[];
export default getTailwindClassNames;
