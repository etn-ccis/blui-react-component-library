import React from 'react';
import Drawer from '@mui/material/Drawer';
import { DocColorField, DocTextField, PLAYGROUND_DRAWER_WIDTH } from '../shared';
import { ComponentType, PropsType } from '../__types__';
import { updateProp, updateSharedProp, updateOtherProp } from '../redux/componentsPropsState';
import { useAppDispatch } from '../redux/hooks';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { styled, useTheme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox/Checkbox';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText/FormHelperText';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Select from '@mui/material/Select/Select';
import Slider from '@mui/material/Slider/Slider';
import * as Colors from '@brightlayer-ui/colors';

const Heading = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 'regular',
    color: Colors.blue[500],
}));

const useStyles = makeStyles(() =>
    createStyles({
        accordionRoot: {
            boxShadow: 'none',
            '&:before': {
                display: 'none',
            },
        },
    })
);

type Anchor = 'right';
type DrawerProps = {
    drawerData: ComponentType;
};
const PlaygroundDrawer = (props: DrawerProps): JSX.Element => {
    const { drawerData: DrawerData } = props;
    const componentName = DrawerData.componentName as string;
    const dispatch = useAppDispatch();
    const theme = useTheme();
    const classes = useStyles(theme);
    const [state, setState] = React.useState({
        right: true,
    });
    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
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

    const renderSelect = (prop: PropsType, index: string): JSX.Element => (
        <FormControl variant={'filled'} sx={{ width: '100%' }} key={index}>
            <InputLabel>
                {`${prop.propName}: ${prop.propType}`}
                {prop.required && '*'}
            </InputLabel>
            <Select
                value={prop.inputValue as string}
                onChange={(event): void =>
                    handleChange(prop.propName, String(event.target.value), componentName, index)
                }
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
        <>
            <FormControlLabel
                key={index}
                control={
                    <Checkbox
                        checked={prop.inputValue as boolean}
                        name={prop.propName}
                        color="primary"
                        onChange={(event): void =>
                            handleChange(prop.propName, event.target.checked, componentName, index)
                        }
                        disabled={prop.disable}
                    />
                }
                label={`${prop.propName}: ${prop.propType} ${prop.required ? '*' : ''}`}
            />
            <FormHelperText>{prop.helperText}</FormHelperText>
        </>
    );

    const renderSlider = (prop: PropsType, index: string): JSX.Element => (
        <Box key={index}>
            <Typography component="span">{`${prop.propName}: ${prop.propType} ${prop.required ? '*' : ''}`}</Typography>
            <Slider
                value={prop.inputValue as number}
                valueLabelDisplay="auto"
                step={prop.rangeData?.step}
                marks
                min={prop.rangeData?.min}
                max={prop.rangeData?.max}
                onChange={(event, value): void => handleChange(prop.propName, value, componentName, index)}
            />
            <FormHelperText>{prop.helperText}</FormHelperText>
        </Box>
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
        <DocColorField
            sx={{ width: '100%' }}
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
        <>
            <Accordion defaultExpanded={sectionNumber === 0} classes={{ root: classes.accordionRoot }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: Colors.blue[500] }} />}>
                    <Heading>{headingTitle}</Heading>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        {knobs?.map(
                            (item: PropsType, index: number): JSX.Element => propBlock(item, `${groupType}-${index}`)
                        )}
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Divider />
        </>
    );

    const displayPropsByGroupType = (data: ComponentType): JSX.Element => {
        const requiredProps: PropsType[] = data.props?.filter((prop) => prop.required) as PropsType[];
        const optionalProps: PropsType[] = data.props?.filter((prop) => !prop.required) as PropsType[];
        const otherProps: PropsType[] = data.otherProps as PropsType[];
        const sharedProps: PropsType[] = data.sharedProps as PropsType[];
        let sectionNumber = 0;
        return (
            <Box>
                {requiredProps?.length > 0 && iterateProps(requiredProps, 'Required Props', sectionNumber++, 'props')}
                {optionalProps?.length > 0 && iterateProps(optionalProps, 'Optional Props', sectionNumber++, 'props')}
                {sharedProps?.length > 0 && iterateProps(sharedProps, 'Shared Props', sectionNumber++, 'sharedProps')}
                {otherProps?.length > 0 && iterateProps(otherProps, 'Others', sectionNumber++, 'otherProps')}
            </Box>
        );
    };

    return (
        <div>
            <React.Fragment key={'right'}>
                <Drawer
                    PaperProps={{
                        sx: {
                            top: '112px',
                            width: PLAYGROUND_DRAWER_WIDTH,
                            paddingBottom: '112px',
                        },
                    }}
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                    variant={'persistent'}
                >
                    {displayPropsByGroupType(DrawerData)}
                </Drawer>
            </React.Fragment>
        </div>
    );
};

export default PlaygroundDrawer;
