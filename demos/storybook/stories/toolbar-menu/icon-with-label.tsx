import React from 'react';
import { GradeA } from '@brightlayer-ui/icons-mui';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { ToolbarMenu } from '@brightlayer-ui/react-components';
import { typography } from '@storybook/theming';

export const iconWithLabel = (): StoryFnReactReturnType => {
    return (
        <ToolbarMenu
            label={
                <span>
                    <GradeA />
                    <span>Dropdown Toolbar</span>
                </span>
            }
        />
    );
};

iconWithLabel.story = { name: 'icon with label' };
