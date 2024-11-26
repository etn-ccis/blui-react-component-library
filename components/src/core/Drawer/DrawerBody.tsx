import React from 'react';
import PropTypes from 'prop-types';
import { DrawerNavGroup, DrawerNavGroupProps } from './DrawerNavGroup';
import { NavItemSharedStyleProps, NavItemSharedStylePropTypes, SharedStyleProps, SharedStylePropTypes } from './types';
import { mergeStyleProp } from './utilities';
import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { DrawerBodyClasses, DrawerBodyClassKey, getDrawerBodyUtilityClass } from './DrawerBodyClasses';
import { unstable_composeClasses as composeClasses } from '@mui/material';

const useUtilityClasses = (ownerState: DrawerBodyProps): Record<DrawerBodyClassKey, string> => {
    const { classes } = ownerState;
    const slots = {
        root: ['root'],
    };

    return composeClasses(slots, getDrawerBodyUtilityClass, classes);
};

export type DrawerBodyProps = BoxProps &
    SharedStyleProps &
    NavItemSharedStyleProps & {
        /** Custom classes for default style overrides */
        classes?: DrawerBodyClasses;
    };

const Root = styled(
    Box,
    {}
)<Pick<DrawerBodyProps, 'backgroundColor'>>(({ backgroundColor }) => ({
    display: 'flex',
    flex: '1 1 0px',
    flexDirection: 'column',
    overflowY: 'auto',
    backgroundColor: backgroundColor,
}));

const DrawerBodyRender: React.ForwardRefRenderFunction<unknown, DrawerBodyProps> = (
    bodyProps: DrawerBodyProps,
    ref: any
) => {
    const generatedClasses = useUtilityClasses(bodyProps);
    const {
        // Inheritable Props
        activeItemBackgroundColor,
        activeItemBackgroundShape,
        activeItemFontColor,
        activeItemIconColor,
        backgroundColor,
        chevron,
        chevronColor,
        collapseIcon,
        disableActiveItemParentStyles,
        divider,
        expandIcon,
        hidePadding,
        itemFontColor,
        itemIconColor,
        nestedBackgroundColor,
        nestedDivider,
        ripple,
        // DrawerBody-specific props
        classes,
        children: bodyChildren,
        // Other props
        ...otherProps
    } = bodyProps;

    const children = React.Children.toArray(bodyChildren);

    return (
        <Root
            ref={ref}
            data-testid={'blui-drawer-body'}
            className={generatedClasses.root}
            backgroundColor={backgroundColor}
            {...otherProps}
        >
            {children.map((child: any, index: number) => {
                if (!child) {
                    return null;
                }

                if (child.type && child.type.displayName !== 'DrawerNavGroup') return child;
                const groupProps: DrawerNavGroupProps = child.props;

                return (
                    <DrawerNavGroup
                        key={`NavGroup_${index}`}
                        {...groupProps}
                        activeItemBackgroundColor={mergeStyleProp(
                            activeItemBackgroundColor,
                            groupProps.activeItemBackgroundColor
                        )}
                        activeItemBackgroundShape={mergeStyleProp(
                            activeItemBackgroundShape,
                            groupProps.activeItemBackgroundShape
                        )}
                        activeItemFontColor={mergeStyleProp(activeItemFontColor, groupProps.activeItemFontColor)}
                        activeItemIconColor={mergeStyleProp(activeItemIconColor, groupProps.activeItemIconColor)}
                        backgroundColor={mergeStyleProp(backgroundColor, groupProps.backgroundColor)}
                        chevron={mergeStyleProp(chevron, groupProps.chevron)}
                        chevronColor={mergeStyleProp(chevronColor, child.props.chevronColor)}
                        collapseIcon={mergeStyleProp(collapseIcon, groupProps.collapseIcon)}
                        disableActiveItemParentStyles={mergeStyleProp(
                            disableActiveItemParentStyles,
                            groupProps.disableActiveItemParentStyles
                        )}
                        divider={mergeStyleProp(divider, groupProps.divider)}
                        expandIcon={mergeStyleProp(expandIcon, groupProps.expandIcon)}
                        hidePadding={mergeStyleProp(hidePadding, groupProps.hidePadding)}
                        itemFontColor={mergeStyleProp(itemFontColor, groupProps.itemFontColor)}
                        itemIconColor={mergeStyleProp(itemIconColor, groupProps.itemIconColor)}
                        nestedBackgroundColor={mergeStyleProp(nestedBackgroundColor, groupProps.nestedBackgroundColor)}
                        nestedDivider={mergeStyleProp(nestedDivider, groupProps.nestedDivider)}
                        ripple={mergeStyleProp(ripple, groupProps.ripple)}
                    />
                );
            })}
        </Root>
    );
};

/**
 * [DrawerBody](https://brightlayer-ui-components.github.io/react/components/drawer-body) component
 *
 * The `<DrawerBody>` is a wrapper for the main content of the Drawer. The typical use case is to display `<DrawerNavGroup>` elements, but custom elements (e.g., for spacing) are accepted as well.
 */
export const DrawerBody = React.forwardRef(DrawerBodyRender);
DrawerBody.displayName = 'DrawerBody';
// @ts-ignore
DrawerBody.propTypes = {
    ...SharedStylePropTypes,
    ...NavItemSharedStylePropTypes,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
};
DrawerBody.defaultProps = {
    classes: {},
};
