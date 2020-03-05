import { ScoreCard } from '@pxblue/react-components';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { storyParams, storyWrapper } from '../../src/util';

const scorecardModule = {
    title: `${COMPONENT_SECTION_NAME}/Scorecard`,
    component: ScoreCard,
    decorators: [storyWrapper],
    parameters: storyParams,
};

/* Display order goes here */
export * from './with-min-config';
export * from './with-background-and-actions';
export { withHeroes } from './with-heroes';
export * from './with-score-badge';
export * from './with-full-config';

export default scorecardModule;
