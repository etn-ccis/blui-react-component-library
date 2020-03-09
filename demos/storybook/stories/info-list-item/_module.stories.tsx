import { InfoListItem } from '@pxblue/react-components';
import React from "react";
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import {getReadMe, storyParams, storyWrapper} from '../../src/utils';


const padDrawer = (storyFn: any): JSX.Element => <div style={{ margin: 20, width: '90%', backgroundColor: 'white' }}>{storyFn()}</div>;

const infoListModule = {
    title: `${COMPONENT_SECTION_NAME}/Info List Item`,
    component: InfoListItem,
    decorators: [storyWrapper, padDrawer],
    parameters: { ...storyParams, notes: { markdown: getReadMe('InfoListItem.md') } },
};

/* Display order goes here */
export { getReadMeStory } from '../../src/utils';
export * from './basic-list-item';
export * from './with-icon';
export * from './with-long-text';
export * from './array-for-subtitles';
export * from './with-avatar';
export * from './with-status-and-background-color';
export * from './with-custom-control';
export * from './with-custom-leftComponent';
export * from './in-a-full-list';

export default infoListModule;
