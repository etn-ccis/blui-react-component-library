import React from 'react';
import { action } from '@storybook/addon-actions';
import { color, text } from '@storybook/addon-knobs';
import { GradeA } from '@brightlayer-ui/icons-mui';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { ToolbarMenu } from '@brightlayer-ui/react-components/core/ToolbarMenu';
import * as Colors from '@brightlayer-ui/colors';

const menuItems = [
    { title: 'Menu Item 1', onClick: action('Item 1 selected') },
    { title: 'Menu Item 2', onClick: action('Item 2 selected') },
    { title: 'Menu Item 3', onClick: action('Item 3 selected') },
];

const menuGroups = [
    {
        items: menuItems,
    },
];

export const iconWithLabel = (): StoryFnReactReturnType => {
    const label = text('label', 'Subtitle');
    const iconColor = color('icon.htmlColor', Colors.green[500]);
    const icon = <GradeA htmlColor={iconColor} />;

    return <ToolbarMenu icon={icon} label={label} menuGroups={menuGroups} />;
};

iconWithLabel.story = { name: 'icon with label' };
