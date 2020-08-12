import { DropdownToolbar, Spacer } from '@pxblue/react-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { WITH_FULL_CONFIG_STORY_NAME } from '../../src/constants';
import { text, select } from '@storybook/addon-knobs';
import { AppBar, Theme, makeStyles, createStyles, useTheme } from '@material-ui/core';
import { Menu, ArrowBack, Home, Work, Settings } from '@material-ui/icons';
import { action } from '@storybook/addon-actions';
import clsx from 'clsx';
import { getDirection } from '@pxblue/storybook-rtl-addon';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    marginRight24: {
      marginRight: theme.spacing(3)
    },
    cursorPointer: {
      cursor: 'pointer'
    },
    marginLeft24: {
      marginRight: theme.spacing(3)
    },

  })
);

export const withFullConfig = (): StoryFnReactReturnType => {
  const theme = useTheme();
  const classes = useStyles();
  const direction = getDirection;
  const menuItems = [
    { label: 'English', onClick: () => action('English selected') },
    { label: 'Arabic', onClick: () => action('Arabic selected') },
    { label: 'French', onClick: () => action('French selected') }
  ];

  const getIcon = (icon: string): JSX.Element | undefined => {
    switch (icon) {
      case '<Menu />':
        return <Menu onClick={action('menu icon clicked...')} />;
      case '<ArrowBack />':
        return <ArrowBack onClick={action('back arrow icon clicked...')} />;
      case 'undefined':
      default:
        return undefined;
    }
  };

  return (
    <AppBar color={'primary'}>
      <DropdownToolbar
        title={text('title', 'Title')}
        subtitleLabel={text('subtitleLabel', 'Subtitle')}
        navigationIcon={getIcon(select('navigationIcon', ['undefined', '<Menu />', '<ArrowBack />'], '<Menu />'))}
        menuItems={menuItems}
      >
        <Spacer />
        <Home className={clsx((direction === 'rtl' ? '' : classes.marginRight24), classes.cursorPointer)} onClick={action('home icon clicked...')} />
        <Work className={clsx((direction === 'rtl' ? classes.marginLeft24 : classes.marginRight24), classes.cursorPointer)} onClick={action('work icon clicked...')} />
        <Settings className={clsx((direction === 'rtl' ? classes.marginLeft24 : ''),classes.cursorPointer)} onClick={action('settings icon clicked...')} />
      </DropdownToolbar>
    </AppBar>
  )
};

withFullConfig.story = { name: WITH_FULL_CONFIG_STORY_NAME };