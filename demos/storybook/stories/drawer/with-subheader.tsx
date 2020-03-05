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
import { Search } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, DrawerHeader, DrawerSubheader } from '@pxblue/react-components/core/Drawer';
import { State, Store } from '@sambego/storybook-state';
import { boolean, optionsKnob } from '@storybook/addon-knobs';
import { OptionsKnobOptionsDisplay } from '@storybook/addon-knobs/dist/components/types/Options';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { defaultDrawerBody } from './with-standard-inputs';

type DrawerState = {
    selected: string;
};

const localStore = new Store<DrawerState>({
    selected: '',
});

export const withSubheader = (): StoryFnReactReturnType => {
    const open = boolean('Open', true);
    const label = 'content';
    const valuesObj = {
        Filter: 'Filter',
        Accordion: 'Accordion',
    };
    const defaultValue = 'Filter';
    const optionsObj = {
        display: 'inline-radio' as OptionsKnobOptionsDisplay,
    };

    const value = optionsKnob(label, valuesObj, defaultValue, optionsObj);

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

    return (
        <State store={localStore}>
            {(state): JSX.Element[] => [
                <Drawer open={open} key={'drawer'}>
                    <DrawerHeader icon={<MenuIcon />} title={'Subheader Demo'} />
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
                    {defaultDrawerBody(state, localStore)}
                </Drawer>,
            ]}
        </State>
    );
};

withSubheader.story = { name: 'with subheader' };
