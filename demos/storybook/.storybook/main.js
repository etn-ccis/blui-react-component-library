var path = require('path');

module.exports = {
    stories: ['../stories/welcome.stories.tsx', '../stories/**/**.stories.tsx'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-knobs',
        '@storybook/addon-notes',
        '@storybook/addon-viewport',
        '@storybook/addon-storysource',
        'storybook-dark-mode/register'
    ],
};
