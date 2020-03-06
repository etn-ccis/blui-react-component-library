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
import MoveToInboxIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { Accessibility, NotificationsActive, Search } from '@material-ui/icons';
import SendIcon from '@material-ui/icons/Send';
import MenuIcon from '@material-ui/icons/Menu';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerNavGroup,
    DrawerSubheader,
} from '@pxblue/react-components/core/Drawer';
import { State, Store } from '@sambego/storybook-state';
import { boolean, optionsKnob } from '@storybook/addon-knobs';
import { OptionsKnobOptionsDisplay } from '@storybook/addon-knobs/dist/components/types/Options';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

type DrawerState = {
    selected: string;
};

const store = new Store<DrawerState>({
    selected: '',
});

const userGuide = 'User Guide';
const accessibility = 'Accessibility';
const notifications = 'Notifications';
const license = 'License';

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
        <State store={store}>
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
                    <DrawerBody>
                        <DrawerNavGroup
                            title={'Default Navigation Group'}
                            activeItem={state.selected}
                            items={[
                                {
                                    title: userGuide,
                                    itemID: userGuide,
                                    onClick: (): void => {
                                        store.set({ selected: userGuide });
                                    },
                                    icon: <MoveToInboxIcon />,
                                },
                                {
                                    title: license,
                                    itemID: license,
                                    onClick: (): void => {
                                        store.set({ selected: license });
                                    },
                                    icon: <SendIcon />,
                                },
                                {
                                    title: accessibility,
                                    itemID: accessibility,
                                    onClick: (): void => {
                                        store.set({ selected: accessibility });
                                    },
                                    icon: <Accessibility />,
                                },
                                {
                                    title: notifications,
                                    itemID: notifications,
                                    onClick: (): void => {
                                        store.set({ selected: notifications });
                                    },
                                    icon: <NotificationsActive />,
                                },
                            ]}
                        />
                        <div style={{ flex: '1 1 0px' }} />
                    </DrawerBody>
                </Drawer>,
            ]}
        </State>
    );
};

withSubheader.story = { name: 'with subheader' };
