import React from 'react';
import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { ThreeLiner, ChannelValue, ToolbarMenu } from '@brightlayer-ui/react-components';
import Trend from '@material-ui/icons/TrendingUp';
import * as Colors from '@brightlayer-ui/colors';
import { makeStyles } from '@material-ui/core/styles';
import { getLeftToRightIconTransform } from '../../src/utils';
const menuItems = [
    { title: 'Item 1', onClick: action('Item 1 selected') },
    { title: 'Item 2', onClick: action('Item 2 selected') },
    { title: 'Item 3', onClick: action('Item 3 selected') },
];

const menuGroups = [
    {
        items: menuItems,
    },
];

const useStyles = makeStyles(() => ({
    toolbarMenuRoot: {
        marginTop: '-0.25rem',
    },
}));
export const withThreeLinerCustomContent = (): StoryFnReactReturnType => {
    const title = text('title', 'title');
    const subtitle = text('subtitle', 'subtitle');
    const info = text('info', 'info');
    const infoContent = select('infoContent', ['text', '<ChannelValue />'], '<ChannelValue />');
    const classes = useStyles();
    return (
        <ThreeLiner
            title={title}
            subtitle={
                <ToolbarMenu
                    classes={{ root: classes.toolbarMenuRoot }}
                    label={subtitle}
                    menuGroups={menuGroups}
                ></ToolbarMenu>
            }
            info={
                infoContent === '<ChannelValue />' ? (
                    <ChannelValue
                        value={'123'}
                        units={'hz'}
                        icon={<Trend htmlColor={Colors.red[500]} style={getLeftToRightIconTransform()} />}
                    />
                ) : (
                    info
                )
            }
        />
    );
};

withThreeLinerCustomContent.story = { name: 'with three liner custom content' };
