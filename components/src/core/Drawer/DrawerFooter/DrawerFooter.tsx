import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';
import { useDrawerContext } from '../DrawerContext';
import { styled } from '@mui/material/styles';
import { cx } from '@emotion/css';
import { unstable_composeClasses as composeClasses } from '@mui/base';
import drawerFooterClasses, {
    DrawerFooterClasses,
    DrawerFooterClassKey,
    getDrawerFooterUtilityClass,
} from './DrawerFooterClasses';
import Box, { BoxProps } from '@mui/material/Box';

const useUtilityClasses = (ownerState: DrawerFooterProps): Record<DrawerFooterClassKey, string> => {
    const { classes } = ownerState;

    const slots = {
        root: ['root'],
        content: ['content'],
        hidden: ['hidden'],
    };

    return composeClasses(slots, getDrawerFooterUtilityClass, classes);
};

export type DrawerFooterProps = BoxProps & {
    /** Custom classes for default style overrides */
    classes?: DrawerFooterClasses;
    /** The color used for the background  */
    backgroundColor?: string;
    /** Optional divider which appears above footer
     *
     * Default: true
     */
    divider?: boolean;
    /** Hide footer contents when drawer is closed
     *
     * Default: true
     */
    hideContentOnCollapse?: boolean;
};

const Root = styled(React.Fragment, {
    name: 'drawer-footer',
    slot: 'root',
})(() => ({
}));

const FooterContent = styled(Box, {
    name: 'drawer-footer',
    slot: 'content',
})<Pick<DrawerFooterProps, 'backgroundColor'>>(({ backgroundColor }) => ({
    width: '100%',
    backgroundColor: backgroundColor,
    [`& .${drawerFooterClasses.hidden}`]: {
        visibility: 'hidden',
    },
}));

const DrawerFooterRender: React.ForwardRefRenderFunction<unknown, DrawerFooterProps> = (
    props: DrawerFooterProps,
    ref: any
) => {
    const defaultClasses = useUtilityClasses(props);
    const {
        classes,
        className: userClassName,
        children,
        divider = true,
        // ignore unused vars so that we can do prop transferring to the root element
        /* eslint-disable @typescript-eslint/no-unused-vars */
        backgroundColor,
        /* eslint-enable @typescript-eslint/no-unused-vars */
        hideContentOnCollapse,
        ...otherProps
    } = props;
    const { open: drawerOpen = true } = useDrawerContext();
    return (
        <Root>
            {divider && <Divider />}
            <FooterContent
                ref={ref}
                className={cx(
                    defaultClasses.root,
                    classes.root,
                    { [defaultClasses.hidden]: !drawerOpen && hideContentOnCollapse },
                    { [classes.hidden]: !drawerOpen && hideContentOnCollapse },
                    userClassName
                )}
                backgroundColor={backgroundColor}
                {...otherProps}
            >
                {children}
            </FooterContent>
        </Root>
    );
};

/**
 * [DrawerFooter](https://brightlayer-ui-components.github.io/react/?path=/info/components-drawer--get-read-me-story) component
 *
 * The `<DrawerFooter>` is an optional section that renders at the bottom of the `<Drawer>`. It can be used to add any custom content (as children).
 */
export const DrawerFooter = React.forwardRef(DrawerFooterRender);
DrawerFooter.displayName = 'DrawerFooter';
DrawerFooter.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string,
        hidden: PropTypes.string,
    }),
    backgroundColor: PropTypes.string,
    divider: PropTypes.bool,
    hideContentOnCollapse: PropTypes.bool,
};
DrawerFooter.defaultProps = {
    classes: {},
    divider: true,
    hideContentOnCollapse: true,
};
