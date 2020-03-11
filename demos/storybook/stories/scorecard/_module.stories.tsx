import { ScoreCard } from '@pxblue/react-components';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import {getReadMe, storyParams, storyWrapper} from '../../src/utils';

const scorecardModule = {
    title: `${COMPONENT_SECTION_NAME}/Scorecard`,
    component: ScoreCard,
    decorators: [storyWrapper],
    parameters: { ...storyParams, notes: { markdown: getReadMe('ScoreCard.md') } },
};

/* Display order goes here */
export { getReadMeStory } from '../../src/utils';
export * from './with-basic-usage';
export * from './with-header-info';
export * from './with-background-and-actions';
export { withHeroes } from './with-heroes';
export * from './with-score-badge';
export * from './with-full-config';

export default scorecardModule;
