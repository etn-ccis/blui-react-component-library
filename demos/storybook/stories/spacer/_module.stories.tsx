import { Spacer } from '@brightlayer-ui/react-components';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { getReadMe, storyParams, storyWrapper } from '../../src/utils';
import { withA11y } from '@storybook/addon-a11y';

const spacerModule = {
    title: `${COMPONENT_SECTION_NAME}/Spacer`,
    component: Spacer,
    // @accessibility remove withA11y from decorators array to hide a11y addon
    decorators: [storyWrapper, withA11y],
    parameters: { ...storyParams, notes: { markdown: getReadMe('Spacer.md') } },
};

/* Display order goes here */
export { getReadMeStory } from '../../src/utils';
export * from './flex-layout';
export * from './static-layout';

export default spacerModule;
