import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { DrawerNavGroup, DrawerNavGroupProps } from './DrawerNavGroup';
import { NavItemSharedStyleProps, NavItemSharedStylePropTypes, SharedStyleProps, SharedStylePropTypes } from './types';
import { mergeStyleProp } from './utilities';
import clsx from 'clsx';

type DrawerBodyClasses = {
    root?: string;
};

export type DrawerBodyProps = HTMLAttributes<HTMLDivElement> &
    SharedStyleProps &
    NavItemSharedStyleProps & {
        /** Custom classes for default style overrides */
        classes?: DrawerBodyClasses;
    };

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flex: '1 1 0px',
        flexDirection: 'column',
        overflowY: 'auto',
        backgroundColor: (props: DrawerBodyProps): string => props.backgroundColor,
    },
});

const DrawerBodyRender: React.ForwardRefRenderFunction<unknown, DrawerBodyProps> = (
    bodyProps: DrawerBodyProps,
    ref: any
) => {
    const defaultClasses = useStyles(bodyProps);
    const {
        // Inheritable Props
        activeItemBackgroundColor,
        activeItemBackgroundShape,
        activeItemFontColor,
        activeItemIconColor,
        backgroundColor,
        chevron,
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
        // Other div props
        ...otherDivProps
    } = bodyProps;

    const children = React.Children.toArray(bodyChildren);

    return (
        <div ref={ref} className={clsx(defaultClasses.root, classes.root)} {...otherDivProps}>
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
        </div>
    );
};

/**
 * [DrawerBody](https://brightlayer-ui-components.github.io/react/?path=/info/components-drawer--get-read-me-story) component
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
