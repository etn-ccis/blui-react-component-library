import React from 'react';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box, { BoxProps } from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox/Checkbox';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText/FormHelperText';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select/Select';
import { ColorPicker, NumberPicker } from './custom-inputs';
import { ChildComponent, PlaygroundComponent, PlaygroundComponentProp } from './types';
import { DocTextField } from './custom-inputs/DocTextField';
import { PLAYGROUND_ACTIONS } from './Playground';

type PlaygroundControlsProps = BoxProps & {
    config: PlaygroundComponent;
    playgroundDrawerWidth?: number;
    dispatch: any;
};

const PlaygroundControls = (props: PlaygroundControlsProps): JSX.Element => {
    const { config, playgroundDrawerWidth, dispatch, sx } = props;
    const componentName = config.componentName as string;
    const theme = useTheme();

    const dispatchActions = (groupType: string, newPropState: any): void => {
        const groupName = groupType.substring(0, groupType.indexOf('-'));
        switch (groupName) {
            case 'props':
                dispatch({ type: PLAYGROUND_ACTIONS.UPDATE_PROP, payload: newPropState });
                break;
            case 'additionalProps':
                dispatch({ type: PLAYGROUND_ACTIONS.UPDATE_ADDITIONAL_PROP, payload: newPropState });
                break;
            case 'sharedProps':
                dispatch({ type: PLAYGROUND_ACTIONS.UPDATE_SHARED_PROP, payload: newPropState });
                break;
            case 'childComponent':
                dispatch({ type: PLAYGROUND_ACTIONS.UPDATE_CHILD_COMPONENT_PROP, payload: newPropState });
                break;
            default:
                dispatch({ type: PLAYGROUND_ACTIONS.UPDATE_PROP, payload: newPropState });
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

    const renderSelect = (prop: PlaygroundComponentProp, index: string): JSX.Element => (
        <FormControl variant={'filled'} sx={{ width: '100%' }} key={index}>
            <InputLabel>{`${prop.propName}: ${prop.propType}`}</InputLabel>
            <Select
                value={prop.inputValue as string}
                onChange={(event): void =>
                    handleChange(prop.propName, String(event.target.value), componentName, index)
                }
            >
                {Array.isArray(prop.options)
                    ? prop.options?.map(
                          (item: any, optionsIndex: number): JSX.Element => (
                              <MenuItem key={optionsIndex} value={item}>
                                  {item}
                              </MenuItem>
                          )
                      )
                    : undefined}
            </Select>
            <FormHelperText>{prop.helperText}</FormHelperText>
        </FormControl>
    );

    const renderBoolean = (prop: PlaygroundComponentProp, index: string): JSX.Element => (
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
                    <Typography sx={{ fontFamily: 'inherit' }}>{`${
                        prop.label ? prop.label : prop.propName
                    }`}</Typography>
                    <Typography variant={'caption'} color={prop.disabled ? 'text.disabled' : 'text.secondary'}>
                        {prop.helperText}
                    </Typography>
                </Box>
            }
        />
    );

    const renderSlider = (prop: PlaygroundComponentProp, index: string): JSX.Element => (
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

    const renderTextField = (prop: PlaygroundComponentProp, index: string): JSX.Element => (
        <DocTextField
            key={index}
            sx={{ width: '100%' }}
            propData={prop}
            onChange={(event): void => handleChange(prop.propName, String(event.target.value), componentName, index)}
        />
    );

    const renderColorInput = (prop: PlaygroundComponentProp, index: string): JSX.Element => (
        <ColorPicker
            fullWidth
            key={index}
            propData={prop}
            onChange={(event): void => handleChange(prop.propName, String(event.target.value), componentName, index)}
        />
    );

    const propBlock = (prop: PlaygroundComponentProp, index: string): JSX.Element => (
        <Box key={index}>
            {prop.inputType === 'select' ? renderSelect(prop, index) : undefined}
            {prop.inputType === 'boolean' ? renderBoolean(prop, index) : undefined}
            {prop.inputType === 'string' ? renderTextField(prop, index) : undefined}
            {prop.inputType === 'colorPicker' ? renderColorInput(prop, index) : undefined}
            {prop.inputType === 'number' ? renderSlider(prop, index) : undefined}
        </Box>
    );

    const iterateProps = (
        knobs: PlaygroundComponentProp[],
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
                        (item: PlaygroundComponentProp, index: number): JSX.Element =>
                            propBlock(item, `${groupType}-${index}`)
                    )}
                </Stack>
            </AccordionDetails>
        </Accordion>
    );

    const displayPropsByGroupType = (data: PlaygroundComponent): JSX.Element => {
        const requiredProps: PlaygroundComponentProp[] = data.props?.filter(
            (prop: any) => prop.required
        ) as PlaygroundComponentProp[];
        const optionalProps: PlaygroundComponentProp[] = data.props?.filter(
            (prop: any) => !prop.required
        ) as PlaygroundComponentProp[];
        const additionalProps: PlaygroundComponentProp[] = data.additionalProps as PlaygroundComponentProp[];
        const sharedProps: PlaygroundComponentProp[] = data.sharedProps as PlaygroundComponentProp[];
        const childComponent: ChildComponent = data.childComponent as ChildComponent;
        let sectionNumber = 0;
        return (
            <Stack divider={<Divider />} mb={2}>
                {requiredProps?.length > 0 && iterateProps(requiredProps, 'Required Props', sectionNumber++, 'props')}
                {optionalProps?.length > 0 && iterateProps(optionalProps, 'Optional Props', sectionNumber++, 'props')}
                {childComponent?.childComponentProps?.length > 0 &&
                    iterateProps(
                        childComponent.childComponentProps,
                        childComponent.childComponentName,
                        sectionNumber++,
                        'childComponent'
                    )}
                {sharedProps?.length > 0 && iterateProps(sharedProps, 'Shared Props', sectionNumber++, 'sharedProps')}
                {additionalProps?.length > 0 &&
                    iterateProps(additionalProps, 'Others', sectionNumber++, 'additionalProps')}
            </Stack>
        );
    };

    return (
        <Box sx={[...(Array.isArray(sx) ? sx : [sx])]}>
            <React.Fragment key={'right'}>
                <Drawer
                    PaperProps={{
                        sx: {
                            width: playgroundDrawerWidth,
                            '& .MuiInputBase-root, & .MuiFormControlLabel-label': {
                                fontFamily: '"Roboto Mono", monospace',
                            },
                            zIndex: theme.zIndex.appBar - 1,
                        },
                    }}
                    anchor={'right'}
                    open
                    variant={'persistent'}
                >
                    {displayPropsByGroupType(config)}
                </Drawer>
            </React.Fragment>
        </Box>
    );
};

export default PlaygroundControls;
