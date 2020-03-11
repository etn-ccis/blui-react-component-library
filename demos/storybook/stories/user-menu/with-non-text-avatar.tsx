import { Avatar } from '@material-ui/core';
import SendIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { UserMenu } from '@pxblue/react-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { getMenu } from './with-basic-usage';
const tRex = require('../../assets/trex.jpeg');

export const withNonTextAvatar = (): StoryFnReactReturnType => {
    const tRexAvatar = <Avatar src={tRex} />;
    const iconAvatar = (
        <Avatar>
            <SendIcon />
        </Avatar>
    );
    return (
        <div style={{ display: 'flex', width: '100px', justifyContent: 'space-between' }}>
            <UserMenu avatar={tRexAvatar} menuGroups={getMenu()} />
            <UserMenu avatar={iconAvatar} menuGroups={getMenu()} />
        </div>
    );
};

withNonTextAvatar.story = { name: 'with non-text avatar' };
