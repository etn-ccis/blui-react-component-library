import React, { ReactNode } from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import { InfoListItem } from '../InfoListItem';
import PropTypes from 'prop-types';
import { ExpandMore, ExpandLess, ArrowDropUp, ArrowDropDown } from '@material-ui/icons';
import { white } from '@pxblue/colors';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        navGroupTextHeader: {
            width: '95%',
            display: 'block',
            alignItems: 'center',
            lineHeight: '3rem',
            height: theme.spacing(6),
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
            backgroundColor: theme.palette.type === 'light' ? white[200] : 'transparent',
            paddingBottom: 0,
            paddingTop: 0,
        },
    })
);

export type NavItem = {
    active?: boolean;
    icon?: JSX.Element;
    onClick?: Function;
    statusColor?: string;
    subtitle?: string;
    title: string;
    divider?: boolean;
    indentation?: number;
    subItems?: NavItem[];
    expanded?: boolean;
};

export type DrawerNavGroupProps = {
    activeBackgroundColor?: string;
    activeFontColor?: string;
    activeIconColor?: string;
    backgroundColor?: string;
    chevron?: boolean;
    content?: ReactNode;
    divider?: boolean;
    fontColor?: string;
    iconColor?: string;
    items: NavItem[];
    onSelect?: Function;
    open?: boolean;
    title?: string;
    titleColor?: string;
    hidePadding?: boolean;
    useSolidExpandArrows?: boolean;
};

function NavigationListItem(item: NavItem, props: DrawerNavGroupProps, expand?: string): ReactNode {
    const { title, subtitle, icon, statusColor, onClick, active, indentation } = item;
    const { divider = true } = props;
    if (!title && !icon) {
        return null;
    }

    const classes = useStyles(props);
    const theme = useTheme();
    const {
        // @ts-ignore
        activeBackgroundColor = theme.palette.type === 'light' ? theme.palette.primary[50] : theme.palette.primary.main,
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
    } = props;

    const action = (): void => {
        if (onSelect) {
            onSelect();
        }
        if (onClick) {
            onClick();
        }
    };

    const getExpandIcon = (): JSX.Element => {
        if (chevron) {
            return null;
        }
        switch (expand) {
            case 'less':
                return <ExpandLess />;
            case 'more':
                return <ExpandMore />;
            case 'lessSolid':
                return <ArrowDropUp />;
            case 'moreSolid':
                return <ArrowDropDown />;
            default:
                return null;
        }
    };

    // 2 indents for top level nav items
    // 2, 4, 6, ... for secondary level and beyond
    const paddingLeft = theme.spacing(indentation ? (indentation - 1) * 4 + 2 : 2);

    return (
        <div style={{ position: 'relative' }} className={`${classes.listItem} ${active && classes.listItemNoHover}`}>
            {active && <div className={classes.active} style={{ backgroundColor: activeBackgroundColor }} />}
            <InfoListItem
                dense
                title={title}
                subtitle={subtitle}
                divider={
                    item.divider === undefined ? (divider ? 'full' : undefined) : item.divider ? 'full' : undefined
                }
                statusColor={statusColor}
                fontColor={active ? activeFontColor : fontColor}
                icon={icon}
                iconColor={active ? activeIconColor : iconColor}
                chevron={chevron}
                rightComponent={getExpandIcon()}
                backgroundColor={'transparent'}
                onClick={(): void => action()}
                style={{ paddingLeft: paddingLeft }}
                hidePadding={hidePadding}
            />
        </div>
    );
}

export const DrawerNavGroup: React.FC<DrawerNavGroupProps> = (props) => {
    const classes = useStyles(props);
    const { open, items, title, content, backgroundColor, titleColor, useSolidExpandArrows, divider } = props;

    // recursively loop through item list and the subItems
    function getDrawerItemList(item: NavItem, index: number, indentation: number): JSX.Element {
        if (item.subItems) {
            // if there are more sub pages, add the bucket header and recurse on this function
            return (
                <React.Fragment key={`${item.title}_Fragment_${indentation}`}>
                    <div key={`${item.title}_item_${indentation}_${index}`}>
                        {NavigationListItem(
                            { ...item, indentation },
                            {
                                ...props,
                                chevron: false,
                                // adding dividers for top level nav items
                                divider: !indentation && divider,
                            },
                            // use outlined arrow for top level nav items, solid otherwise
                            indentation && useSolidExpandArrows
                                ? item.expanded
                                    ? 'lessSolid'
                                    : 'moreSolid'
                                : item.expanded
                                ? 'less'
                                : 'more'
                        )}
                    </div>
                    <Collapse in={item.expanded} key={`${item.title}_group_${indentation}_${index}`}>
                        <List className={classes.secondaryLevelListGroup}>
                            {item.subItems.map((subItem: NavItem, subItemIndex: number) =>
                                getDrawerItemList(subItem, subItemIndex, indentation + 1)
                            )}
                        </List>
                    </Collapse>
                </React.Fragment>
            );
        }
        // otherwise, we reached a leaf node. return
        return (
            <div key={`${item.title}_item_${indentation}_${index}`}>
                {NavigationListItem(
                    { ...item, indentation },
                    {
                        ...props,
                        // adding dividers for top level nav items
                        divider: !indentation && divider,
                    }
                )}
            </div>
        );
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
                {items.map((item: NavItem, index: number) => getDrawerItemList(item, index, 0))}
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
    title: PropTypes.string,
    titleColor: PropTypes.string,
    divider: PropTypes.bool,
};

DrawerNavGroup.defaultProps = {
    divider: true,
    useSolidExpandArrows: false,
};
