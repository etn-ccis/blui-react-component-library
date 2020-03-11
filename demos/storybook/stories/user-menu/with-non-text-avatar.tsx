import { Avatar } from '@material-ui/core';
import { Pets } from '@material-ui/icons';
import { UserMenu } from '@pxblue/react-components';
import { action } from '@storybook/addon-actions';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { menuGroups } from './with-basic-usage';
const tRex = require('../../assets/trex.jpeg');

export const withNonTextAvatar = (): StoryFnReactReturnType => {
    const tRexAvatar = <Avatar src={tRex} />;
    const iconAvatar = (
        <Avatar>
            <Pets />
        </Avatar>
    );
    return (
        <div style={{ display: 'flex', width: '100px', justifyContent: 'space-between' }}>
            <UserMenu avatar={tRexAvatar} menuGroups={menuGroups} onOpen={action('open')} onClose={action('close')} />
            <UserMenu avatar={iconAvatar} menuGroups={menuGroups} onOpen={action('open')} onClose={action('close')} />
        </div>
    );
};

withNonTextAvatar.story = { name: 'with non-text avatar' };
