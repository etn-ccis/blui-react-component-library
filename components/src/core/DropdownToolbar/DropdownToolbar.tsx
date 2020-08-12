import React, { useState, useCallback, useRef } from 'react';
import { Typography, Toolbar, ListItemText, Menu, MenuItem, ToolbarProps, createStyles, makeStyles, useTheme, Theme } from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';
import clsx from 'clsx';

const MENU_ITEM_HEIGHT = 48;

export type ToolbarMenuItem = {
  label: string;
  onClick: Function;
};
export type DropdownToolbarProps = ToolbarProps & {
  title: string;
  subtitleLabel: string | undefined;
  menuItems?: ToolbarMenuItem[] | undefined;
  navigationIcon?: JSX.Element;
  customMenu?: JSX.Element;
  classes?: DropdownToolbarClasses;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    navigationIconWrapper: {
      marginRight: theme.spacing(4),
      cursor: 'pointer',
    },
    title: {
      lineHeight: 1,
    },
    subtitle: {
      display: 'inline-flex',
      cursor: 'pointer',
    },
    arrowDropdown: {
      marginLeft: 4,
    },
    menuItem: {
      height: MENU_ITEM_HEIGHT,
    }
  })
);

export type DropdownToolbarClasses = {
  root?: string;
  navigationIconWrapper?: string;
  title?: string;
  subtitle?: string;
  arrowDropdown?: string;
  menuItem?: string;
};

export const DropdownToolbar: React.FC<DropdownToolbarProps> = (props) => {
  const { title, subtitleLabel, menuItems, navigationIcon, customMenu, style, classes } = props;
  const [anchorEl, setAnchorEl]: [EventTarget | null, Function] = useState(null);
  const anchor = useRef(null);
  const theme = useTheme();
  const defaultClasses = useStyles();
  const _navigationIcon = useCallback(() => {
    if (navigationIcon) {
      return <div className={clsx(defaultClasses.navigationIconWrapper, classes?.navigationIconWrapper)}>{navigationIcon}</div>;
    }
  }, [navigationIcon]);

  return (
    <>
      <Toolbar data-testid="dropdown-toolbar" className={clsx(defaultClasses.root, classes?.root)} style={style}>
        {_navigationIcon()}
        <ListItemText
          data-testid="dropdown-title"
          id={'dropdown-toolbar-text'}
          primary={
            <Typography variant="h6" className={clsx(defaultClasses.title, classes?.title)}>
              {title}
            </Typography>
          }
          secondary={
            <Typography
              id={'dropdown-subtitle'}
              data-testid={'dropdown-subtitle'}
              ref={anchor}
              aria-haspopup="true"
              className={clsx(defaultClasses.subtitle, classes?.subtitle)}
              component={'div'}
              onClick={(): void => {
                setAnchorEl(anchor.current);
              }}
            >
              {subtitleLabel || ''}
              {menuItems && menuItems.length > 0 && <ArrowDropDown className={clsx(defaultClasses.arrowDropdown, classes?.arrowDropdown)} />}
              {customMenu && <ArrowDropDown className={clsx(defaultClasses.arrowDropdown, classes?.arrowDropdown)} />}
            </Typography>
          }
        />
        {props.children}
      </Toolbar>

      {menuItems && Boolean(anchorEl) && (
        <Menu
          id="dropdown-toolbar-menu"
          data-testid="dropdown-toolbar-menu"
          elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={(): void => setAnchorEl(null)}
          MenuListProps={{ style: { padding: 0 } }}
          PaperProps={{
            style: {
              maxHeight: MENU_ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {!customMenu && (menuItems.map((item: ToolbarMenuItem, index: number) => (
            <MenuItem
              key={`Toolbar-Option-${index}`}
              id={`menu-item-${index}`}
              data-testid={`menu-item-${index}`}
              onClick={(): void => {
                setAnchorEl(null);
                item.onClick();
              }}
              className={clsx(defaultClasses.menuItem, classes?.menuItem)}
            >
              {item.label}
            </MenuItem>
          )))}
        </Menu>
      )}

      {customMenu && Boolean(anchorEl) && (
        <Menu
          id="dropdown-toolbar-menu"
          data-testid="dropdown-toolbar-menu"
          elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={(): void => setAnchorEl(null)}
          MenuListProps={{ style: { padding: 0 } }}
          PaperProps={{
            style: {
              maxHeight: MENU_ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {customMenu}
        </Menu>
      )}
    </>
  );
};