/// <reference types="react" />
import PropTypes from 'prop-types';
declare const TailwindThemeProvider: {
    ({ theme, children }: {
        theme: any;
        children: any;
    }): JSX.Element;
    propTypes: {
        theme: PropTypes.Requireable<PropTypes.InferProps<{}>>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    defaultProps: {
        theme: {};
        children: undefined;
    };
};
export default TailwindThemeProvider;
