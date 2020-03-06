import { InfoListItem } from '@pxblue/react-components';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { storyParams, storyWrapper } from '../../src/utils';

const infoListModule = {
    title: `${COMPONENT_SECTION_NAME}/Info List Item`,
    component: InfoListItem,
    decorators: [storyWrapper],
    parameters: { ...storyParams, notes: { markdown: require('./../../../../docs/InfoListItem.md') } },
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
