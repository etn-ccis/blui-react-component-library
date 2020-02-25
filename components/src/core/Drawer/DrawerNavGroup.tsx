import React, { ReactNode, useState } from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import { InfoListItem } from '../InfoListItem';
import PropTypes from 'prop-types';
import { ExpandLess, ExpandLessOutlined } from '@material-ui/icons';
import { white, black } from '@pxblue/colors';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        navGroupTextHeader: {
            display: 'block',
            alignItems: 'center',
            lineHeight: '3rem',
            height: theme.spacing(6),
            color: theme.palette.text.primary,
            fontWeight: 600,
        },
        subheader: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            cursor: 'text',
            [theme.breakpoints.down('xs')]: {
                paddingLeft: theme.spacing(3),
                paddingRight: theme.spacing(3),
            },
        },
        listItem: {
            color: theme.palette.text.secondary,
            fontWeight: 300,
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
            },
        },
        listItemNoHover: {
            '&:hover': {
                backgroundColor: 'unset',
            },
        },
        active: {
            content: '""',
            zIndex: 0,
            position: 'absolute',
            height: '100%',
            width: 'calc(100% - 8px)',
            left: 0,
            top: 0,
            backgroundColor:
                //@ts-ignore
                theme.palette.type === 'light' ? theme.palette.secondary[50] : theme.palette.secondary.light,
            borderRadius: '0px 24px 24px 0px',
            opacity: 0.9,
        },
        secondaryLevelListGroup: {
            backgroundColor: theme.palette.type === 'light' ? white[200] : black['A200'],
            paddingBottom: 0,
            paddingTop: 0,
        },
        rightComponent: {
            transitionDuration: '300ms',
            cursor: 'inherit', 
            display: 'flex', 
            height: 48, 
            alignItems: 'center',
            '&.expanded': {
                transform: 'rotate(180deg)',
            }
        },
    })
);

export type NestedNavItem = {
    // Icon on the right. Will be flipped upside down if item is expanded
    rightComponent?: JSX.Element;

    // onClick of the entire row
    onClick?: Function;

    // onClick for the rightComponent
    onClickIcon?: Function;

    // text to be displayed
    title: string;

    // secondary text as a hint text
    subtitle?: string;

    // any items listed inside this
    subItems?: NestedNavItem[];

    // if the item has a divider under its content
    divider?: boolean;

    // item id to match for the active state.
    // Should be unique within the entire list. Will be used as the list key too.
    itemID: string;
};

export type NavItem = NestedNavItem & {
    // Status stripe.
    statusColor?: string;

    // icon on the left
    icon?: JSX.Element;
};

export type DrawerNavGroupProps = {
    activeBackgroundColor?: string;
    activeFontColor?: string;
    activeIconColor?: string;
    backgroundColor?: string;

    // override by rightComponent
    chevron?: boolean;
    content?: ReactNode;
    divider?: boolean;
    nestedDivider?: boolean;
    fontColor?: string;
    iconColor?: string;
    items: NavItem[];
    onSelect?: Function;
    open?: boolean;
    ripple?: boolean;
    title?: string;
    titleColor?: string;
    hidePadding?: boolean;
    activeItem?: string;
};

// renderer function for each nav item / nested nav item
function NavigationListItem(
    item: NavItem | NestedNavItem,
    props: DrawerNavGroupProps,
    depth: number = 0,
    initialIsExpanded: boolean = false
): ReactNode {
    const { onClick, title, subtitle, subItems, divider: itemDivider = false, onClickIcon, itemID } = item;
    const icon = (item as NavItem).icon;
    const { divider: groupDivider = true, nestedDivider = false } = props;

    const [expanded, setExpanded] = useState(initialIsExpanded);

    const classes = useStyles(props);
    const theme = useTheme();
    // @ts-ignore
    const primary50Color = theme.palette.primary[50];
    const {
        activeBackgroundColor = theme.palette.type === 'light' ? primary50Color : theme.palette.primary.main,
        activeFontColor = theme.palette.type === 'light'
            ? theme.palette.primary.main
            : theme.palette.primary.contrastText,
        activeIconColor = theme.palette.type === 'light'
            ? theme.palette.primary.main
            : theme.palette.primary.contrastText,
        fontColor,
        chevron,
        iconColor,
        onSelect,
        hidePadding,
        ripple,
        activeItem,
    } = props;

    const divider = itemDivider ? itemDivider : nestedDivider ? nestedDivider : groupDivider;

    const action = (): void => {
        if (onSelect) {
            onSelect();
        }
        if (onClick) {
            onClick();
        }
    };


    function getRightActionIcon(): JSX.Element {
        if (item.rightComponent) {
            return item.rightComponent;
        }
        if (chevron) {
            return null;
        }
        if (!subItems) {
            return null;
        }
        if (depth) {
            return <ExpandLessOutlined />;
        }
        return <ExpandLess />;
    }

    let rightActionIcon = getRightActionIcon();

    const rightAction = (): void => {
        if (!rightActionIcon) return;
        if (onClickIcon) {
            onClickIcon();
        } else {
            action();
        } 
        console.log('right action');
        setExpanded(!expanded);
    };

    // 2 indents for top level nav items
    // 2, 4, 6, ... for secondary level and beyond
    const paddingLeft = theme.spacing(depth ? (depth - 1) * 4 + 2 : 2);

    const active = activeItem === itemID;

    const statusColor = (item as NavItem).statusColor;

    return (
        <div style={{ position: 'relative' }} className={`${classes.listItem} ${active && classes.listItemNoHover}`}>
            {active && <div className={classes.active} style={{ backgroundColor: activeBackgroundColor }} />}
            <InfoListItem
                dense
                title={title}
                subtitle={subtitle}
                divider={divider ? 'full' : undefined}
                statusColor={statusColor}
                fontColor={active ? activeFontColor : fontColor}
                icon={icon}
                iconColor={active ? activeIconColor : iconColor}
                chevron={chevron}
                rightComponent={
                    <div
                        onClick={(_) => rightAction()}
                        className={`${classes.rightComponent} ${expanded && 'expanded'}`}
                    >
                        {rightActionIcon}
                    </div>
                }
                backgroundColor={'transparent'}
                onClick={(): void => action()}
                style={{ paddingLeft: paddingLeft }}
                hidePadding={hidePadding}
                ripple={ripple}
            />
        </div>
    );
}

export const DrawerNavGroup: React.FC<DrawerNavGroupProps> = (props) => {
    const classes = useStyles(props);
    const { open, items, title, content, backgroundColor, titleColor } = props;

    /* recursively loop through item list and the subItems
     * returns [
        Element to render,
        if there is an active nav item
       ] 
    */
    function getDrawerItemList(item: NavItem, depth: number): [JSX.Element, boolean] {
        let isExpanded = false;
        if (item.subItems) {
            // if there are more sub pages, add the bucket header and recurse on this function

            const collapsibleComponent = (
                <Collapse in={isExpanded} key={`${item.title}_group_${depth}`}>
                    <List className={classes.secondaryLevelListGroup}>
                        {item.subItems.map((subItem: NavItem) => {
                            const [elt, isSubItemExpanded] = getDrawerItemList(subItem, depth + 1);
                            isExpanded = isExpanded || isSubItemExpanded;
                            return elt;
                        })}
                    </List>
                </Collapse>
            );

            return [
                <React.Fragment key={`${item.title}_Fragment_${depth}`}>
                    <div key={`${item.itemID}`}>{NavigationListItem(item, props, depth, isExpanded)}</div>
                    {collapsibleComponent}
                </React.Fragment>,
                true,
            ];
        }
        // Otherwise, we reached a leaf node. Return.
        isExpanded = item.itemID === props.activeItem;
        return [<div key={`${item.itemID}`}>{NavigationListItem(item, props, depth, isExpanded)}</div>, isExpanded];
    }

    return (
        <>
            <List
                style={{ paddingBottom: '0', backgroundColor }}
                subheader={
                    <ListSubheader
                        className={classes.subheader}
                        style={{
                            position: 'unset',
                            color: open ? titleColor : 'transparent',
                        }}
                    >
                        {title && (
                            <Typography noWrap variant={'subtitle2'} className={classes.navGroupTextHeader}>
                                {title}
                            </Typography>
                        )}
                        {content}
                    </ListSubheader>
                }
            >
                <div key={`${title}_title`}>{(title || content) && <Divider />}</div>
                {items.map((item: NavItem) => getDrawerItemList(item, 0))}
            </List>
        </>
    );
};

DrawerNavGroup.displayName = 'DrawerNavGroup';

DrawerNavGroup.propTypes = {
    activeBackgroundColor: PropTypes.string,
    activeFontColor: PropTypes.string,
    activeIconColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    chevron: PropTypes.bool,
    content: PropTypes.element,
    fontColor: PropTypes.string,
    iconColor: PropTypes.string,
    // @ts-ignore
    items: PropTypes.arrayOf(
        PropTypes.shape({
            active: PropTypes.bool,
            icon: PropTypes.element,
            onClick: PropTypes.func,
            statusColor: PropTypes.string,
            subtitle: PropTypes.string,
            title: PropTypes.string.isRequired,
            divider: PropTypes.bool,
        })
    ).isRequired,
    onSelect: PropTypes.func,
    open: PropTypes.bool,
    ripple: PropTypes.bool,
    title: PropTypes.string,
    titleColor: PropTypes.string,
    divider: PropTypes.bool,
};

DrawerNavGroup.defaultProps = {
    divider: true,
    ripple: true,
};
