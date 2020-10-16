import React from 'react';
export declare type TouchableProps = {
    is: string;
    children?: React.ReactNode;
    disabled?: boolean;
    tabIndex?: number;
    onTouch?: Function;
};
export declare class Touchable extends React.PureComponent<TouchableProps> {
    static defaultProps: {
        is: string;
        children: undefined;
        disabled: boolean;
        tabIndex: undefined;
        onTouch: undefined;
    };
    constructor(props: TouchableProps);
    handleKeyPress(e: React.KeyboardEvent): void;
    render(): JSX.Element;
}
export default Touchable;
