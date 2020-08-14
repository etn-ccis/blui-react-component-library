import React, { useState, useCallback, useRef } from 'react';
import {
    Typography,
    Toolbar,
    ListItemText,
    Menu,
    MenuItem,
    ToolbarProps,
    createStyles,
    makeStyles,
    useTheme,
    Theme,
    MenuProps as standardMenuProps,
} from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';
import clsx from 'clsx';

const MENU_ITEM_HEIGHT = 48;

export type ToolbarMenuItem = {
    label: string;
    onClick: () => void;
};
export type DropdownToolbarProps = ToolbarProps & {
    title: string;
    subtitle?: string;
    menuItems?: ToolbarMenuItem[];
    navigationIcon?: JSX.Element;
    customMenu?: JSX.Element;
    classes?: DropdownToolbarClasses;
    menuProps?: Omit<standardMenuProps, 'open'>;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
        navigation: {
            marginRight: theme.spacing(4),
            cursor: 'pointer',
        },
        textContent: {
            overflow: 'hidden',
            whiteSpace: 'nowrap',
        },
        title: {
            lineHeight: 1,
            textOverflow: 'ellipsis',
            overflow: 'auto',
        },
        subtitleContent: {
            display: 'flex',
            flexDirection: 'row',
            maxWidth: 'fit-content',
            cursor: 'pointer',
        },
        subtitle: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
        dropdownArrow: {
            marginLeft: theme.spacing(0.5),
        },
        rotateDropdownArrow: {
            transform: 'rotate(180deg)',
        },
    })
);

export type DropdownToolbarClasses = {
    root?: string;
    navigation?: string;
    textContent?: string;
    title?: string;
    subtitleContent?: string;
    subtitle?: string;
    dropdownArrow?: string;
    menuItem?: string;
};

export const DropdownToolbar: React.FC<DropdownToolbarProps> = (props) => {
    const { title, subtitle, menuItems, navigationIcon, customMenu, menuProps, classes = {}, ...toolbarProps } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const anchor = useRef(null);
    const theme = useTheme();
    const defaultClasses = useStyles(theme);
    const getNavigationIcon = useCallback(() => {
        if (navigationIcon) {
            return <div className={clsx(defaultClasses.navigation, classes.navigation)}>{navigationIcon}</div>;
        }
    }, [navigationIcon]);

    const getMenu = useCallback(() => {
        if (customMenu && Boolean(anchorEl)) {
            return (
                <Menu
                    elevation={0}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    {...menuProps}
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={(): void => setAnchorEl(null)}
                    MenuListProps={{ style: { padding: 0 } }}
                    PaperProps={{
                        style: {
                            maxHeight: MENU_ITEM_HEIGHT * 4.5,
                        },
                    }}
                >
                    {customMenu}
                </Menu>
            );
        }
        if (menuItems && Boolean(anchorEl)) {
            return (
                <Menu
                    elevation={0}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    {...menuProps}
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={(): void => setAnchorEl(null)}
                    MenuListProps={{ style: { padding: 0 } }}
                    PaperProps={{
                        style: {
                            maxHeight: MENU_ITEM_HEIGHT * 4.5,
                        },
                    }}
                >
                    {!customMenu &&
                        menuItems.map((item: ToolbarMenuItem, index: number) => (
                            <MenuItem
                                key={`Toolbar-Option-${index}`}
                                onClick={(): void => {
                                    setAnchorEl(null);
                                    item.onClick();
                                }}
                                className={clsx(classes.menuItem)}
                            >
                                {item.label}
                            </MenuItem>
                        ))}
                </Menu>
            );
        }
    }, [menuItems, customMenu, anchorEl, menuProps]);

    return (
        <>
            <Toolbar className={clsx(defaultClasses.root, classes.root)} style={toolbarProps.style}>
                {getNavigationIcon()}
                <ListItemText
                    className={clsx(defaultClasses.textContent, classes.textContent)}
                    primary={
                        <Typography variant="h6" className={clsx(defaultClasses.title, classes.title)}>
                            {title}
                        </Typography>
                    }
                    secondary={
                        <Typography
                            ref={anchor}
                            aria-haspopup="true"
                            component={'div'}
                            onClick={(): void => {
                                setAnchorEl(anchor.current);
                            }}
                            className={clsx(defaultClasses.subtitleContent, classes.subtitleContent)}
                        >
                            <span className={clsx(defaultClasses.subtitle, classes.subtitle)}>{subtitle || ''}</span>
                            {((menuItems && menuItems.length > 0) || customMenu) && (
                                <ArrowDropDown
                                    className={clsx(
                                        defaultClasses.dropdownArrow,
                                        classes.dropdownArrow,
                                        anchorEl ? defaultClasses.rotateDropdownArrow : ''
                                    )}
                                />
                            )}
                        </Typography>
                    }
                />
                {props.children}
            </Toolbar>
            {getMenu()}
        </>
    );
};
