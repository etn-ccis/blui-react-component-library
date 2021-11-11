import { ThreeLiner } from '@brightlayer-ui/react-components';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { storyParams, storyWrapper } from '../../src/utils';
import { withA11y } from '@storybook/addon-a11y';

const threeLinerModule = {
    title: `${COMPONENT_SECTION_NAME}/Three Liner`,
    component: ThreeLiner,
    // @accessibility remove withA11y from decorators array to hide a11y addon
    decorators: [storyWrapper, withA11y],
    parameters: { ...storyParams, notes: { markdown: require('./../../../../docs/ThreeLiner.md') } },
};

/* Display order goe6s here */
export { getReadMeStory } from '../../src/utils';
export { withBasicUsage } from './with-basic-usage';
export { withCustomContent } from './with-custom-content';

export default threeLinerModule;
