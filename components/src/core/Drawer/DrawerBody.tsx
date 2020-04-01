import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import {PXBlueDrawerNavGroupInheritableProperties,} from './Drawer';
import {DrawerNavGroup, DrawerNavGroupProps} from './DrawerNavGroup';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flex: '1 1 0px',
        flexDirection: 'column',
        overflowY: 'auto',
    },
});

type DrawerBodyClasses = {
    root?: string;
};

export type DrawerBodyProps = {
    backgroundColor?: string;
    classes?: DrawerBodyClasses;
    drawerOpen?: boolean;
} & PXBlueDrawerNavGroupInheritableProperties;

export const DrawerBody: React.FC<DrawerBodyProps> = (bodyProps) => {
    const defaultClasses = useStyles(bodyProps);
    const { backgroundColor, classes = {}} = bodyProps;
    const children = React.Children.toArray(bodyProps.children);
    return (
        <div className={clsx(defaultClasses.root, classes.root)} style={{ backgroundColor }}>
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
                        activeItem={groupProps.activeItem || bodyProps.activeItem}
                        activeItemBackgroundColor={
                            groupProps.activeItemBackgroundColor || bodyProps.activeItemBackgroundColor
                        }
                        activeItemFontColor={groupProps.activeItemFontColor || bodyProps.activeItemFontColor}
                        activeItemIconColor={groupProps.activeItemIconColor || bodyProps.activeItemIconColor}
                        activeItemBackgroundShape={
                            groupProps.activeItemBackgroundShape || bodyProps.activeItemBackgroundShape
                        }
                        backgroundColor={bodyProps.backgroundColor}
                        chevron={groupProps.chevron === undefined ? bodyProps.chevron : groupProps.chevron}
                        collapseIcon={groupProps.collapseIcon || bodyProps.collapseIcon}
                        divider={groupProps.divider === undefined ? bodyProps.divider : groupProps.divider}
                        expandIcon={groupProps.expandIcon || bodyProps.expandIcon}
                        hidePadding={
                            groupProps.hidePadding === undefined ? bodyProps.hidePadding : groupProps.hidePadding
                        }
                        itemFontColor={groupProps.itemFontColor || bodyProps.itemFontColor}
                        itemIconColor={groupProps.itemIconColor || bodyProps.itemIconColor}
                        InfoListItemProps={groupProps.InfoListItemProps || bodyProps.InfoListItemProps}
                        nestedDivider={
                            groupProps.nestedDivider === undefined ? bodyProps.nestedDivider : groupProps.nestedDivider
                        }
                        nestedBackgroundColor={groupProps.nestedBackgroundColor || bodyProps.nestedBackgroundColor}
                        ripple={groupProps.ripple === undefined ? bodyProps.ripple : groupProps.ripple}
                        onItemSelect={bodyProps.onItemSelect}
                        drawerOpen={bodyProps.drawerOpen}
                        titleColor={groupProps.titleColor || bodyProps.titleColor}
                    />
                );
            })}
        </div>
    );
};

DrawerBody.displayName = 'DrawerBody';
