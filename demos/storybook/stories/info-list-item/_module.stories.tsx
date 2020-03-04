import { InfoListItem } from '@pxblue/react-components';
import { storyParams, storyWrapper } from '../../src/util';

const infoListModule = {
    title: 'playground/Info List Item',
    component: InfoListItem,
    decorators: [storyWrapper],
    parameters: storyParams,
};

/* Display order goes here */
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
