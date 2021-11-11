import React from 'react';
import { EmptyState } from '@brightlayer-ui/react-components';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { getReadMe, storyParams, storyWrapper } from '../../src/utils';
import { withA11y } from '@storybook/addon-a11y';
import { useDarkMode } from 'storybook-dark-mode';
import { white } from '@brightlayer-ui/colors';

const useWhiteBackground = (storyFn: any): JSX.Element => (
    <div
        style={{
            backgroundColor: useDarkMode() ? undefined : white[50],
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        {storyFn()}
    </div>
);

const emptyStateModule = {
    title: `${COMPONENT_SECTION_NAME}/Empty State`,
    component: EmptyState,
    // @accessibility remove withA11y from decorators array to hide a11y addon
    decorators: [storyWrapper, withA11y, useWhiteBackground],
    parameters: { ...storyParams, notes: { markdown: getReadMe('EmptyState.md') } },
};

/* Display order goes here */
export { getReadMeStory } from '../../src/utils';
export * from './with-basic-usage';
export * from './with-description';
export * from './with-actions';
export * from './with-full-config';
export * from './within-a-card';

export default emptyStateModule;
