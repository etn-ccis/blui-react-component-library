import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    IconButton,
    TextField,
    Typography,
} from '@material-ui/core';

import InputAdornment from '@material-ui/core/InputAdornment';
import ExpandMoreIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { Menu, Search } from '@material-ui/icons';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerNavGroup,
    DrawerSubheader,
} from '@pxblue/react-components/core/Drawer';
import { boolean, optionsKnob } from '@storybook/addon-knobs';
import { OptionsKnobOptionsDisplay } from '@storybook/addon-knobs/dist/components/types/Options';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { DrawerStoryContext } from './util';
import { navGroupItems1 } from './with-basic-config';

const filter = (
    <TextField
        id="outlined-basic"
        label="filter"
        variant="outlined"
        fullWidth
        InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton>
                        <Search />
                    </IconButton>
                </InputAdornment>
            ),
        }}
    />
);
const accordion = (
    <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Expansion Panel 1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
            </Typography>
        </ExpansionPanelDetails>
    </ExpansionPanel>
);

export const withSubheader = (context: DrawerStoryContext): StoryFnReactReturnType => {
    const valuesObj = {
        Filter: 'Filter',
        Accordion: 'Accordion',
    };
    const defaultValue = 'Filter';
    const optionsObj = {
        display: 'inline-radio' as OptionsKnobOptionsDisplay,
    };
    const value = optionsKnob('Subheader Content', valuesObj, defaultValue, optionsObj);
    return (
        <Drawer open={boolean('open', true)}>
            <DrawerHeader icon={<Menu />} title={'Subheader Demo'} />
            <DrawerSubheader>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '20px',
                    }}
                >
                    {value === 'Filter' ? filter : accordion}
                </div>
            </DrawerSubheader>
            <DrawerBody>
                <DrawerNavGroup
                    title={'Default Navigation Group'}
                    activeItem={context.state.selected}
                    items={navGroupItems1}
                />
            </DrawerBody>
        </Drawer>
    );
};

withSubheader.story = { name: 'with subheader' };
