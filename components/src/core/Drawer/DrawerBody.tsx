import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { PXBlueDrawerInheritableGroupProperties } from './Drawer';
import { DrawerNavGroup, DrawerNavGroupProps } from './DrawerNavGroup';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flex: '1 1 0px',
        flexDirection: 'column',
        overflowY: 'auto',
    },
});

export type DrawerBodyProps = {
    backgroundColor?: string,
} & PXBlueDrawerInheritableGroupProperties;

export const DrawerBody: React.FC<DrawerBodyProps> = (bodyProps) => {
    const classes = useStyles(bodyProps);
    const { backgroundColor } = bodyProps;
    const children = React.Children.toArray(bodyProps.children);
    return (
        <div className={classes.root} style={{ backgroundColor }}>
            {children.map((child: any, index) => {
                if (!child) {
                    return null;
                }

                if (child.type && child.type.displayName !== 'DrawerNavGroup') return null;
                const groupProps: DrawerNavGroupProps = child.props;

                // for any DrawerNavGroup, if a prop is not set (undefined), inherit from the DrawerBody
                // open and onSelect is always determined by DrawerBody
                return (
                    <DrawerNavGroup
                        {...groupProps}
                        key={index.toString()}
                        activeItem={groupProps.activeItem || bodyProps.activeItem}
                        activeItemBackgroundColor={
                            groupProps.activeItemBackgroundColor || bodyProps.activeItemBackgroundColor
                        }
                        activeItemFontColor={groupProps.activeItemFontColor || bodyProps.activeItemFontColor}
                        activeItemIconColor={groupProps.activeItemIconColor || bodyProps.activeItemIconColor}
                        activeItemBackgroundShape={
                            groupProps.activeItemBackgroundShape || bodyProps.activeItemBackgroundShape
                        }
                        chevron={groupProps.chevron === undefined ? bodyProps.chevron : groupProps.chevron}
                        collapseIcon={groupProps.collapseIcon || bodyProps.collapseIcon}
                        divider={groupProps.divider === undefined ? bodyProps.divider : groupProps.divider}
                        expandIcon={groupProps.expandIcon || bodyProps.expandIcon}
                        hidePadding={
                            groupProps.hidePadding === undefined ? bodyProps.hidePadding : groupProps.hidePadding
                        }
                        itemFontColor={groupProps.itemFontColor || bodyProps.itemFontColor}
                        itemIconColor={groupProps.itemIconColor || bodyProps.itemIconColor}
                        nestedDivider={
                            groupProps.nestedDivider === undefined ? bodyProps.nestedDivider : groupProps.nestedDivider
                        }
                        ripple={groupProps.ripple === undefined ? bodyProps.ripple : groupProps.ripple}
                        onSelect={bodyProps.onSelect}
                        open={bodyProps.open}
                        titleColor={groupProps.titleColor || bodyProps.titleColor}
                    />
                );
            })}
        </div>
    );
};

DrawerBody.displayName = 'DrawerBody';
DrawerBody.propTypes = {};

DrawerBody.defaultProps = {};
