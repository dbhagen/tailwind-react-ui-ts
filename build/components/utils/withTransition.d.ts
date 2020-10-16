/// <reference types="react" />
declare const withTheme: (Component: any, { inState, ...rest }: {
    inState: any;
}) => {
    (componentProps: any): JSX.Element;
    displayName: string;
};
export default withTheme;
