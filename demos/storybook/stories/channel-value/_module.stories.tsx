import { ChannelValue } from '@pxblue/react-components';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { getReadMe, storyParams, storyWrapper } from '../../src/utils';

const channelValueModule = {
    title: `${COMPONENT_SECTION_NAME}/Channel Value`,
    component: ChannelValue,
    decorators: [storyWrapper],
    parameters: { ...storyParams, notes: { markdown: getReadMe('ChannelValue.md') } },
};

/* Display order goes here */
export { getReadMeStory } from '../../src/utils';
export * from './with-value';
export * from './with-units';
export * from './with-icon';
export * from './with-extraLarge-font-size';
export * from './with-all-props';

export default channelValueModule;
