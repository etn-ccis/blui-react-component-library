import {storiesOf} from '@storybook/react';
import React from 'react';

export const stories = storiesOf('API/Documentation', module);

const autoNavToDocs = () => {
   window.top.document.getElementsByClassName('simplebar-content')[1].setAttribute('style', 'display: none');
   if (window.top.location.href.includes('/story/')) {
      window.top.history.replaceState(null, '', window.top.location.href.replace('/story/', '/info/'));
      //@ts-ignore
      window.top.document.getElementsByClassName('css-mtwlrt')[0].click();
   }
};

const docFn = () => <>{autoNavToDocs()}</>;

stories.add(
   'Channel Value', docFn,
   { notes: { markdown: require('./../../../docs/ChannelValue.md') }}
);
stories.add(
   'Drawer', docFn,
   { notes: { markdown: require('./../../../docs/Drawer.md') }}
);
stories.add(
   'Drawer Layout', docFn,
   { notes: { markdown: require('./../../../docs/DrawerLayout.md') }}
);
stories.add(
   'Empty State', docFn,
   { notes: { markdown: require('./../../../docs/EmptyState.md') }}
);
stories.add(
   'Hero', docFn,
   { notes: { markdown: require('./../../../docs/Hero.md') }}
);
stories.add(
   'Info List Item', docFn,
   { notes: { markdown: require('./../../../docs/InfoListItem.md') }}
);
stories.add(
   'List Item Tag', docFn,
   { notes: { markdown: require('./../../../docs/ListItemTag.md') }}
);
stories.add(
   'Score Card', docFn,
   { notes: { markdown: require('./../../../docs/ScoreCard.md') }}
);
stories.add(
   'Spacer', docFn,
   { notes: { markdown: require('./../../../docs/Spacer.md') }}
);
stories.add(
   'User Menu', docFn,
   { notes: { markdown: require('./../../../docs/UserMenu.md') }}
);
