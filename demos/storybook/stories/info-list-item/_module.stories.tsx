import { InfoListItem } from '@pxblue/react-components';
import React from 'react';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { getReadMe, storyParams, storyWrapper } from '../../src/utils';
import { withA11y } from '@storybook/addon-a11y';
import { useDarkMode } from 'storybook-dark-mode';
import { black } from '@pxblue/colors';

const padDrawer = (storyFn: any): JSX.Element => (
    <div style={{ margin: 20, width: '90%', backgroundColor: useDarkMode() ? black[900] : 'white' }}>{storyFn()}</div>
);

const infoListModule = {
    title: `${COMPONENT_SECTION_NAME}/Info List Item`,
    component: InfoListItem,
    // @accessibility remove withA11y from decorators array to hide a11y addon
    decorators: [storyWrapper, padDrawer, withA11y],
    parameters: { ...storyParams, notes: { markdown: getReadMe('InfoListItem.md') } },
};

/* Display order goes here */
export { getReadMeStory } from '../../src/utils';
export * from './with-basic-usage';
export * from './with-subtitle';
export * from './with-icon';
export * from './with-array-for-subtitles';
export * from './with-avatar';
export * from './with-background-color';
export * from './with-leftComponent';
export * from './with-rightComponent';
export * from './with-full-config';
export * from './within-full-list';

export default infoListModule;
