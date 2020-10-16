import React from 'react';
export declare type ButtonProps = {
    theme: any;
    is: string;
    children?: React.ReactNode;
    color?: string;
    type?: string;
    buttonStyle?: 'fill' | 'outline' | 'text' | 'link';
    disabled?: boolean;
    large?: boolean;
    small?: boolean;
    fullWidth?: boolean;
    brand?: string;
    bg?: string | [];
    text?: string | [];
    border?: (string | boolean | undefined)[] | string;
    leading?: string;
    p?: number | {
        x: string | number;
        y: string | number;
    };
    rounded?: string;
    opacity?: number;
    underline?: boolean;
    role?: string;
    w?: string;
};
export declare const Button: React.FunctionComponent<ButtonProps>;
export { Button as component };
declare const _default: {
    (props: any): JSX.Element;
    displayName: string;
};
export default _default;
