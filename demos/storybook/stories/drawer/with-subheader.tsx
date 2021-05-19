import { Accordion, AccordionDetails, AccordionSummary, IconButton, TextField, Typography } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import ExpandMoreIcon from '@material-ui/core/SvgIcon/SvgIcon';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerNavGroup,
    DrawerSubheader,
    NavItem,
} from '@pxblue/react-components/core/Drawer';
import { boolean, optionsKnob } from '@storybook/addon-knobs';
import { OptionsKnobOptionsDisplay } from '@storybook/addon-knobs/dist/components/types/Options';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React, { useState } from 'react';
import { Accessibility, NotificationsActive, Person, Today, Menu, Search } from '@material-ui/icons';

const filter = (
    <TextField
        id="outlined-basic"
        label="filter"
        variant="outlined"
        fullWidth
        InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton aria-label="filter button" edge={'end'}>
                        <Search />
                    </IconButton>
                </InputAdornment>
            ),
        }}
    />
);
const accordion = (
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Expansion Panel 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
            </Typography>
        </AccordionDetails>
    </Accordion>
);

export const withSubheader = (): StoryFnReactReturnType => {
    const [selected, setSelected] = useState('');

    const valuesObj = {
        filter: 'Filter',
        accordion: 'Accordion',
    };
    const optionsObj = {
        display: 'inline-radio' as OptionsKnobOptionsDisplay,
    };
    const subheaderContent = optionsKnob('Subheader Content', valuesObj, 'Filter', optionsObj);

    const navGroupItems: NavItem[] = [
        {
            title: 'Identity Management',
            itemID: '1',
            icon: <Person />,
            onClick: (): void => setSelected('1'),
        },
        {
            title: 'Calendar',
            itemID: '2',
            icon: <Today />,
            onClick: (): void => setSelected('2'),
        },
        {
            title: 'Accessibility',
            itemID: '3',
            icon: <Accessibility />,
            onClick: (): void => setSelected('3'),
        },
        {
            title: 'Notifications',
            itemID: '4',
            icon: <NotificationsActive />,
            onClick: (): void => setSelected('4'),
        },
    ];

    return (
        <Drawer open={boolean('open', true)} activeItem={selected}>
            <DrawerHeader icon={<Menu />} title={'Subheader Demo'} subtitle={'See the DrawerSubheader below'} />
            <DrawerSubheader
                hideContentOnCollapse={boolean('hideContentOnCollapse', true)}
                divider={boolean('divider', true)}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '1rem 16px',
                    }}
                >
                    {subheaderContent === 'Filter' ? filter : accordion}
                </div>
            </DrawerSubheader>
            <DrawerBody>
                <DrawerNavGroup items={navGroupItems} />
            </DrawerBody>
        </Drawer>
    );
};

withSubheader.story = { name: 'with subheader' };
