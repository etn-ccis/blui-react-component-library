import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerNavGroup,
    DrawerNavItem,
    DrawerSubheader,
} from '@brightlayer-ui/react-components/core/Drawer';
import { createProps, removeEmptyLines } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accessibility, Menu, NotificationsActive, Person, Search, Today } from '@mui/icons-material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField/TextField';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import IconButton from '@mui/material/IconButton/IconButton';
import Accordion from '@mui/material/Accordion/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary/AccordionSummary';
import Typography from '@mui/material/Typography/Typography';
import AccordionDetails from '@mui/material/AccordionDetails/AccordionDetails';

export const PreviewComponent = (): JSX.Element => {
    const drawerSubheaderJson = useAppSelector(
        (state: RootState) => state.componentsPropsState.drawerSubheaderComponent
    );

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
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header">
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

    const drawerSubheaderProps = createProps(drawerSubheaderJson.props as PropsType[]);
    const drawerSubheaderOtherProps = createProps(drawerSubheaderJson.otherProps as PropsType[]);

    const showSubHeaderContent = (content: string): string => {
        if (content === 'Filter') {
            return `
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
                />`;
        }
        return `
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header">
                        <Typography>Expansion Panel 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>`;
    };

    const generateCodeSnippet = (): string => {
        const jsx = `<Drawer open={${drawerSubheaderOtherProps.open}} activeItem={'Identity Management'}>
        <DrawerHeader 
            icon={<Menu />}
            title={'Subheader Demo'}
            subtitle={'See the DrawerSubheader below'} 
        />
        <DrawerSubheader
            hideContentOnCollapse={${drawerSubheaderProps.hideContentOnCollapse}}
            divider={${drawerSubheaderProps.divider}}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '1rem 16px',
                }}
            >
            ${showSubHeaderContent(drawerSubheaderOtherProps.content)}
            </Box>
        </DrawerSubheader>
        <DrawerBody>
            <DrawerNavGroup>
                <DrawerNavItem
                    icon={<Person />}
                    itemID={'Identity Management'}
                    title={'Identity Management'}
                />
                <DrawerNavItem
                    icon={<Today />}
                    itemID={'Calendar'}
                    title={'Calendar'} />
                <DrawerNavItem 
                    icon={<Accessibility />}
                    title={'Accessibility'}
                    itemID={'Accessibility'} />
                <DrawerNavItem
                    icon={<NotificationsActive />}
                    title={'Notifications'}
                    itemID={'Notifications'}
                />
            </DrawerNavGroup>
        </DrawerBody>
    </Drawer>`;

        return removeEmptyLines(jsx);
    };

    return (
        <PreviewComponentWithCode
            previewContent={
                <Drawer open={drawerSubheaderOtherProps.open} activeItem={'Identity Management'} noLayout>
                    <DrawerHeader icon={<Menu />} title={'Subheader Demo'} subtitle={'See the DrawerSubheader below'} />
                    <DrawerSubheader
                        hideContentOnCollapse={drawerSubheaderProps.hideContentOnCollapse}
                        divider={drawerSubheaderProps.divider}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                padding: '1rem 16px',
                            }}
                        >
                            {drawerSubheaderOtherProps.content === 'Filter' ? filter : accordion}
                        </Box>
                    </DrawerSubheader>
                    <DrawerBody sx={{ flex: '1 1 auto' }} backgroundColor={'transparent'}>
                        <DrawerNavGroup>
                            <DrawerNavItem
                                icon={<Person />}
                                itemID={'Identity Management'}
                                title={'Identity Management'}
                            />
                            <DrawerNavItem icon={<Today />} itemID={'Calendar'} title={'Calendar'} />
                            <DrawerNavItem icon={<Accessibility />} title={'Accessibility'} itemID={'Accessibility'} />
                            <DrawerNavItem
                                icon={<NotificationsActive />}
                                title={'Notifications'}
                                itemID={'Notifications'}
                            />
                        </DrawerNavGroup>
                    </DrawerBody>
                </Drawer>
            }
            code={generateCodeSnippet()}
        />
    );
};
