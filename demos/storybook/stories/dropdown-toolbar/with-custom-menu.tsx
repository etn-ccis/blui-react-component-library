import { DropdownToolbar, InfoListItem } from '@pxblue/react-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { text } from '@storybook/addon-knobs';
import { AppBar } from '@material-ui/core';
import { Business, House, Apartment } from '@material-ui/icons';
import * as Colors from '@pxblue/colors';
import { action } from '@storybook/addon-actions';

export const withCustomMenu = (): StoryFnReactReturnType => {
  return (
    <AppBar color={'primary'}>
      <DropdownToolbar
        title={text('title', 'Title')}
        subtitleLabel={text('subtitleLabel', 'Subtitle')}
        customMenu={
          <>
            <InfoListItem title={'Atlanta'} icon={<Business />} iconColor={Colors.blue[500]} onClick={action('Atlanta selected')}></InfoListItem>
            <InfoListItem title={'Pittsburgh'} icon={<House />} iconColor={Colors.red[500]} statusColor={Colors.red[500]} onClick={action('Pittsburgh selected')}></InfoListItem>
            <InfoListItem title={'New York'} icon={<Apartment />} iconColor={Colors.blue[500]} onClick={action('New York selected')}></InfoListItem>
          </>
        }
      >
      </DropdownToolbar>
    </AppBar>
  )
};

withCustomMenu.story = { name: 'with custom menu' };