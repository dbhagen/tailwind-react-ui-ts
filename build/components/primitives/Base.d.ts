import React from 'react';
import { Class } from 'utility-types';
export declare type BaseProps = {
    theme: any;
    is: string | (() => void) | Class<React.ComponentType>;
    children?: React.ReactNode;
    className?: string;
    innerRef?: (() => void) | Object;
};
declare const Base: React.FunctionComponent<BaseProps>;
export { Base as component };
declare const _default: {
    (props: any): JSX.Element;
    displayName: string;
};
export default _default;
