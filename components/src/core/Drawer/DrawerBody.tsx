import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import {
    PXBlueDrawerNavGroupInheritableProperties,
    PXBlueDrawerNavGroupInheritablePropertiesPropTypes,
} from './Drawer';
import PropTypes from 'prop-types';
import { DrawerNavGroup, DrawerNavGroupProps } from './DrawerNavGroup';

type DrawerBodyClasses = {
    root?: string;
};

export type DrawerBodyProps = HTMLAttributes<HTMLDivElement> & {
    backgroundColor?: string;
    classes?: DrawerBodyClasses;
    drawerOpen?: boolean;
} & PXBlueDrawerNavGroupInheritableProperties;

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
        classes,
        drawerOpen,
        backgroundColor,
        activeItem,
        activeItemBackgroundColor,
        activeItemBackgroundShape,
        activeItemFontColor,
        activeItemIconColor,
        chevron,
        children: bodyChildren,
        collapseIcon,
        disableActiveItemParentStyles,
        divider,
        expandIcon,
        hidePadding,
        InfoListItemProps,
        itemFontColor,
        itemIconColor,
        nestedBackgroundColor,
        nestedDivider,
        onItemSelect,
        ripple,
        titleColor,
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

                // for any DrawerNavGroup, if a prop is not set (undefined), inherit from the DrawerBody
                // open and onItemSelect is always determined by DrawerBody
                return (
                    <DrawerNavGroup
                        {...groupProps}
                        key={`NavGroup_${index}`}
                        activeItem={groupProps.activeItem || activeItem}
                        activeItemBackgroundColor={groupProps.activeItemBackgroundColor || activeItemBackgroundColor}
                        activeItemFontColor={groupProps.activeItemFontColor || activeItemFontColor}
                        activeItemIconColor={groupProps.activeItemIconColor || activeItemIconColor}
                        activeItemBackgroundShape={groupProps.activeItemBackgroundShape || activeItemBackgroundShape}
                        backgroundColor={backgroundColor}
                        chevron={groupProps.chevron === undefined ? chevron : groupProps.chevron}
                        collapseIcon={groupProps.collapseIcon || collapseIcon}
                        disableActiveItemParentStyles={
                            groupProps.disableActiveItemParentStyles || disableActiveItemParentStyles
                        }
                        divider={groupProps.divider === undefined ? divider : groupProps.divider}
                        expandIcon={groupProps.expandIcon || expandIcon}
                        hidePadding={groupProps.hidePadding === undefined ? hidePadding : groupProps.hidePadding}
                        itemFontColor={groupProps.itemFontColor || itemFontColor}
                        itemIconColor={groupProps.itemIconColor || itemIconColor}
                        InfoListItemProps={groupProps.InfoListItemProps || InfoListItemProps}
                        nestedDivider={
                            groupProps.nestedDivider === undefined ? nestedDivider : groupProps.nestedDivider
                        }
                        nestedBackgroundColor={groupProps.nestedBackgroundColor || nestedBackgroundColor}
                        ripple={groupProps.ripple === undefined ? ripple : groupProps.ripple}
                        onItemSelect={onItemSelect}
                        drawerOpen={drawerOpen}
                        titleColor={groupProps.titleColor || titleColor}
                    />
                );
            })}
        </div>
    );
};

export const DrawerBody = React.forwardRef(DrawerBodyRender);
DrawerBody.displayName = 'DrawerBody';

// @ts-ignore
DrawerBody.propTypes = {
    backgroundColor: PropTypes.string,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    drawerOpen: PropTypes.bool,
    ...PXBlueDrawerNavGroupInheritablePropertiesPropTypes,
};
DrawerBody.defaultProps = {
    classes: {},
};
