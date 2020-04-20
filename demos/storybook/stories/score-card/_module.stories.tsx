import { ScoreCard } from '@pxblue/react-components';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { getReadMe, storyParams, storyWrapper } from '../../src/utils';
import { withA11y } from '@storybook/addon-a11y';

const scorecardModule = {
    title: `${COMPONENT_SECTION_NAME}/Score Card`,
    component: ScoreCard,
    // @accessibility remove withA11y from decorators array to hide a11y addon
    decorators: [storyWrapper, withA11y],
    parameters: { ...storyParams, notes: { markdown: getReadMe('ScoreCard.md') } },
};

/* Display order goes here */
export { getReadMeStory } from '../../src/utils';
export * from './with-basic-usage';
export * from './with-custom-header';
export { withActions } from './with-actions';
export { withHeroes } from './with-heroes';
export * from './with-score-badge';
export * from './with-full-config';

export default scorecardModule;
