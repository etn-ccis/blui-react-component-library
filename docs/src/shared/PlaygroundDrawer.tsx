import React, { useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import { DocTextField, CodeBlock, PLAYGROUND_DRAWER_WIDTH, createProps } from '../shared';
import { ComponentType, OtherComponentPropsType, PropsType } from '../__types__';
import {
    resetProps,
    updateProp,
    updateSharedProp,
    updateOtherProp,
    updateOtherComponentProp,
} from '../redux/componentsPropsState';
import { useAppDispatch } from '../redux/hooks';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox/Checkbox';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText/FormHelperText';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select/Select';
import { ColorPicker } from './components/ColorPicker/ColorPicker.component';
import { NumberPicker } from './components/NumberPicker/NumberPicker.component';
import { IconButton, Tab, Tabs } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { generateCodeSnippet as generateAppBarCodeSnippet } from '../componentDocs/AppBar/playground/utils';
import { KeyboardArrowDown } from '@mui/icons-material';
import { InfoListItem } from '@brightlayer-ui/react-components';

const getCodeGenerator = (componentName: string) => {
    // console.log(componentName);
    switch (componentName) {
        case 'AppBar': {
            return generateAppBarCodeSnippet;
        }
        default: {
            return generateAppBarCodeSnippet;
        }
    }
}

// type Anchor = 'right';
type DrawerProps = {
    drawerData: ComponentType;
};
const PlaygroundDrawer = (props: DrawerProps): JSX.Element => {
    const { drawerData: DrawerData } = props;
    const componentProps = createProps(DrawerData.props as PropsType[]);
    const componentName = DrawerData.componentName as string;
    const [selectedTab, setSelectedTab] = React.useState('Props')
    const dispatch = useAppDispatch();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = React.useState(true);
    useEffect(() => {
        dispatch(resetProps());
    }, []);
    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setDrawerOpen(open);
    };

    const dispatchActions = (groupType: string, newPropState: any): void => {
        const groupName = groupType.substring(0, groupType.indexOf('-'));
        switch (groupName) {
            case 'props':
                dispatch(updateProp(newPropState));
                break;
            case 'otherProps':
                dispatch(updateOtherProp(newPropState));
                break;
            case 'sharedProps':
                dispatch(updateSharedProp(newPropState));
                break;
            case 'otherComponentProps':
                dispatch(updateOtherComponentProp(newPropState));
                break;
            default:
                dispatch(updateProp(newPropState));
                break;
        }
    };

    const createNewPropState = (
        name: string,
        value: string | boolean | number | number[],
        component: string,
        groupType: string
    ): void => {
        const newState = {
            propName: name,
            propValue: value,
            componentName: component,
        };
        dispatchActions(groupType, newState);
    };

    const handleChange = (
        propName: string,
        propValue: string | boolean | number | number[],
        componentTitle: string,
        groupType: string
    ): void => {
        createNewPropState(propName, propValue, componentTitle, groupType);
    };

    const handleTabChange = (event: React.SyntheticEvent, newValue: string): void => {
        setSelectedTab(newValue);
    };

    const renderSelect = (prop: PropsType, index: string): JSX.Element => (
        <FormControl variant={'filled'} sx={{ width: '100%' }} key={index}>
            <InputLabel>{`${prop.propName}: ${prop.propType}`}</InputLabel>
            <Select
                value={prop.inputValue as string}
                onChange={(event): void =>
                    handleChange(prop.propName, String(event.target.value), componentName, index)
                }
                MenuProps={{
                    BackdropProps: {
                        sx: { display: 'none' },
                    },
                }}
            >
                {Array.isArray(prop.options)
                    ? prop.options?.map(
                        (item: any, id: number): JSX.Element => (
                            <MenuItem key={id} value={item}>
                                {item}
                            </MenuItem>
                        )
                    )
                    : undefined}
            </Select>
            <FormHelperText>{prop.helperText}</FormHelperText>
        </FormControl>
    );

    const renderBoolean = (prop: PropsType, index: string): JSX.Element => (
        <FormControlLabel
            key={index}
            control={
                <Checkbox
                    checked={prop.inputValue as boolean}
                    name={prop.label ? prop.label : prop.propName}
                    color="primary"
                    onChange={(event): void => handleChange(prop.propName, event.target.checked, componentName, index)}
                    disabled={prop.disabled}
                />
            }
            sx={{ alignItems: 'flex-start' }}
            label={
                <Box>
                    <Typography sx={{ fontFamily: 'inherit' }}>{`${prop.label ? prop.label : prop.propName
                        }`}</Typography>
                    <Typography variant={'caption'} color={prop.disabled ? 'text.disabled' : 'text.secondary'}>
                        {prop.helperText}
                    </Typography>
                </Box>
            }
        />
    );

    const renderSlider = (prop: PropsType, index: string): JSX.Element => (
        <NumberPicker
            fullWidth
            key={index}
            propData={prop}
            onChange={(event): void => {
                const value = parseFloat(event.target.value);
                handleChange(
                    prop.propName,
                    isNaN(value) && prop.propType === 'number | string' ? '' : isNaN(value) ? '' : value,
                    componentName,
                    index
                );
            }}
        />
    );

    const renderTextField = (prop: PropsType, index: string): JSX.Element => (
        <DocTextField
            key={index}
            sx={{ width: '100%' }}
            propData={prop}
            onChange={(event): void => handleChange(prop.propName, String(event.target.value), componentName, index)}
        />
    );

    const renderColorInput = (prop: PropsType, index: string): JSX.Element => (
        <ColorPicker
            fullWidth
            key={index}
            propData={prop}
            onChange={(event): void => handleChange(prop.propName, String(event.target.value), componentName, index)}
        />
    );

    const propBlock = (prop: PropsType, index: string): JSX.Element => (
        <Box key={index}>
            {prop.inputType === 'select' ? renderSelect(prop, index) : undefined}
            {prop.inputType === 'boolean' ? renderBoolean(prop, index) : undefined}
            {prop.inputType === 'string' ? renderTextField(prop, index) : undefined}
            {prop.inputType === 'colorPicker' ? renderColorInput(prop, index) : undefined}
            {prop.inputType === 'number' ? renderSlider(prop, index) : undefined}
        </Box>
    );

    const iterateProps = (
        knobs: PropsType[],
        headingTitle: string,
        sectionNumber: number,
        groupType: string
    ): JSX.Element => (
        <Accordion
            defaultExpanded={sectionNumber === 0}
            sx={{
                boxShadow: 'none',
                '&:before': {
                    display: 'none',
                },
                backgroundImage: 'unset',
            }}
        >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}>
                <Typography variant={'subtitle1'} color={'primary.main'}>
                    {headingTitle}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Stack gap={3}>
                    {knobs?.map(
                        (item: PropsType, index: number): JSX.Element => propBlock(item, `${groupType}-${index}`)
                    )}
                </Stack>
            </AccordionDetails>
        </Accordion>
    );

    const displayPropsByGroupType = (data: ComponentType): JSX.Element => {
        const requiredProps: PropsType[] = data.props?.filter((prop) => prop.required) as PropsType[];
        const optionalProps: PropsType[] = data.props?.filter((prop) => !prop.required) as PropsType[];
        const otherProps: PropsType[] = data.otherProps as PropsType[];
        const sharedProps: PropsType[] = data.sharedProps as PropsType[];
        const otherComponentProps: OtherComponentPropsType = data.otherComponentProps as OtherComponentPropsType;
        let sectionNumber = 0;
        return (
            <Stack divider={<Divider />} mb={2}>
                {requiredProps?.length > 0 && iterateProps(requiredProps, 'Required Props', sectionNumber++, 'props')}
                {optionalProps?.length > 0 && iterateProps(optionalProps, 'Optional Props', sectionNumber++, 'props')}
                {otherComponentProps?.childComponentProps?.length > 0 &&
                    iterateProps(
                        otherComponentProps.childComponentProps,
                        otherComponentProps.childComponentName,
                        sectionNumber++,
                        'otherComponentProps'
                    )}
                {sharedProps?.length > 0 && iterateProps(sharedProps, 'Shared Props', sectionNumber++, 'sharedProps')}
                {otherProps?.length > 0 && iterateProps(otherProps, 'Others', sectionNumber++, 'otherProps')}
            </Stack>
        );
    };

    type PlaygroundTabPanelProps = {
        children?: React.ReactNode;
        value: string;
        selectedValue: string;
    };

    const PlaygroundTabPanel = (playgroundTabPanelProps: PlaygroundTabPanelProps): JSX.Element => {
        const { children, value, selectedValue } = playgroundTabPanelProps;

        return (
            <Box
                role="tabpanel"
                hidden={value !== selectedValue}
            >
                {value === selectedValue && (
                    <Box sx={{ backgroundColor: 'background.paper' }}>
                        <Typography component={'div'}>{children}</Typography>
                    </Box>
                )}
            </Box>
        );
    };

    return (
        <div>

            <Drawer
                PaperProps={{
                    sx: {
                        top: isMobile ? 'auto' : '112px',
                        // make width 100%, height:70% (see PreviewComponentWithCode)
                        // make <Drawer> or React.Fragment conditional (!isMobile &&)
                        // look at sx prop on mui website
                        width: isMobile ? '100%' : PLAYGROUND_DRAWER_WIDTH,
                        height: {
                            xs: 'calc(70vh - 105px)', sm: 'calc(70vh - 113px)'
                        },
                        '& .MuiInputBase-root, & .MuiFormControlLabel-label': {
                            fontFamily: '"Roboto Mono", monspace',
                        },
                        // zIndex: theme.zIndex.appBar - 1,
                        backgroundColor: 'background.paper',
                    },
                }
                }

                anchor={isMobile ? 'bottom' : 'right'}
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                variant={'persistent'}
            >
                <InfoListItem
                    hidePadding
                    title="Props & Code"
                    rightComponent={<IconButton onClick={toggleDrawer(!drawerOpen)} >
                        <KeyboardArrowDown /></IconButton>}
                />
                {isMobile && (
                    <>
                        <Tabs
                            value={selectedTab}
                            textColor='primary'
                            onChange={handleTabChange}
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                borderBottom: 1,
                                borderColor: 'divider',
                                '& .MuiTabs-indicator': {
                                    backgroundColor: 'primary.main',
                                },
                            }}
                        >
                            <Tab
                                sx={{
                                    flex: 1,
                                    color: 'text.primary',
                                    '&.Mui-selected': {
                                        color: 'primary.main',
                                    },
                                }}
                                label="Props" value='Props' />
                            <Tab
                                sx={{
                                    flex: 1,
                                    color: 'text.primary',
                                    '&.Mui-selected': {
                                        color: 'primary.main',
                                    },
                                }}
                                label="Code" value='Code' />
                        </Tabs>

                        <PlaygroundTabPanel value={'Props'} selectedValue={selectedTab}>
                            {displayPropsByGroupType(DrawerData)}
                        </PlaygroundTabPanel>
                        <PlaygroundTabPanel value={'Code'} selectedValue={selectedTab}>
                            <CodeBlock code={(getCodeGenerator(componentName))(DrawerData, componentProps, theme)} language="jsx" sx={{ height: '100%' }} />
                        </PlaygroundTabPanel>
                    </>
                )}

                {!isMobile && displayPropsByGroupType(DrawerData)}

            </Drawer>

        </div >
    );
};

export default PlaygroundDrawer;
