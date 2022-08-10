import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import {
    updateDrawerProps,
    updateDrawerHeaderProps,
    updateDrawerBodyProps,
    updateDrawerNavGroupProps,
} from '../../redux/drawerComponent';
import { propsType, componentType, nestedChildrenType } from '../../data/DrawerTypes';
import { RootState } from '../../redux/store';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Palette } from '@mui/icons-material';

type Anchor = 'right';

const TemporaryDrawer = () => {
    const [state, setState] = React.useState({
        right: true,
    });
    const dispatch = useAppDispatch();
    const drawerJson = useAppSelector((state: RootState) => state.drawerComponentData.drawerComponent);

    const renderDrawerInputs = () => {
        return drawerJson.map((entry: componentType, index: number) => renderDrawerInput(entry, index));
    };

    const dispatchActions = (componentName: string, newPropState: any) => {
        switch (componentName) {
            case 'Drawer':
                dispatch(updateDrawerProps(newPropState));
                break;
            case 'DrawerHeader':
                dispatch(updateDrawerHeaderProps(newPropState));
                break;
            case 'DrawerBody':
                dispatch(updateDrawerBodyProps(newPropState));
                break;
            case 'DrawerNavGroup':
                dispatch(updateDrawerNavGroupProps(newPropState));
                break;
            default:
                dispatch(updateDrawerProps(newPropState));
                break;
        }
    };

    const updateProps = (value: any, index: string, componentName: string, inputComponent?: string) => {
        const component = drawerJson.find((comp: componentType) => comp.componentName === componentName);
        if (component?.props) {
            const newComponentProp =
                inputComponent === 'select'
                    ? component?.props?.map((prop: propsType, id: number) =>
                          `${componentName}-${id}` === index ? { ...prop, defaultValue: value } : prop
                      )
                    : component?.props?.map((prop: propsType, id: number) =>
                          `${componentName}-${id}` === index ? { ...prop, inputValue: value } : prop
                      );
            dispatchActions(componentName, newComponentProp);
        } else if (componentName === 'DrawerNavGroup') {
            const newComponentProp = component?.nestedChildren?.map(
                (nestedChild: nestedChildrenType, parentId: number) =>
                    nestedChild.nestedChildrenProps?.map((prop: propsType, id: number) =>
                        `${componentName}-${parentId}-${id}` === index ? { ...prop, inputValue: value } : prop
                    )
            );
            console.log(newComponentProp, 'newComponentProp');
            let nestedChildrenProps: any = {};
            nestedChildrenProps['index'] = parseInt(index.split('-')[1]);
            nestedChildrenProps['componentName'] = 'DrawerNavGroup';
            nestedChildrenProps['updatedProps'] = newComponentProp?.[nestedChildrenProps['index']];

            console.log(nestedChildrenProps, 'nestedChildrenProps');
            dispatchActions(componentName, nestedChildrenProps);
        }
    };

    const handleSelectChange = (
        event: SelectChangeEvent,
        index: string,
        componentName: string,
        inputComponent: string
    ) => {
        updateProps(String(event.target.value), index, componentName, inputComponent);
    };

    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: string,
        componentName: string
    ): void => {
        updateProps(event.target.checked, index, componentName);
    };

    const handleTextChange = (
        event: React.ChangeEvent<{ value: unknown }>,
        index: string,
        componentName: string
    ): void => {
        updateProps(String(event.target.value), index, componentName);
    };

    const handleColorInputChange = (
        event: React.ChangeEvent<{ value: unknown }>,
        index: string,
        componentName: string
    ): void => {
        updateProps(String(event.target.value), index, componentName);
    };

    const renderSelect = (prop: propsType, index: string, componentName: string) => {
        return (
            <FormControl variant={'filled'} sx={{ width: '100%' }}>
                <InputLabel>{`${prop.propName}: ${prop.propType}`}</InputLabel>
                <Select
                    value={prop.defaultValue as string}
                    onChange={(event) => handleSelectChange(event, index, componentName, 'select')}
                >
                    {Array.isArray(prop.inputValue)
                        ? prop.inputValue.map((item: any, index: number) => (
                              <MenuItem key={index} value={item}>
                                  {item}
                              </MenuItem>
                          ))
                        : undefined}
                </Select>
                <FormHelperText>{prop.helperText}</FormHelperText>
            </FormControl>
        );
    };

    const renderBoolean = (prop: propsType, index: string, componentName: string) => {
        return (
            <>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={prop.inputValue as boolean}
                            name={prop.propName}
                            color="primary"
                            onChange={(event) => handleCheckboxChange(event, index, componentName)}
                        />
                    }
                    label={`${prop.propName}: ${prop.propType}`}
                />
                <FormHelperText>{prop.helperText}</FormHelperText>
            </>
        );
    };

    const renderTextField = (prop: propsType, index: string, componentName: string) => {
        return (
            <TextField
                key={index}
                sx={{ width: '100%' }}
                variant={'filled'}
                value={prop.inputValue}
                label={`${prop.propName}:${prop.inputType}`}
                helperText={prop.helperText}
                onChange={(event) => handleTextChange(event, index, componentName)}
            />
        );
    };

    const renderColorInput = (prop: propsType, index: string, componentName: string) => {
        return (
            <TextField
                sx={{ width: '100%' }}
                id="filled-adornment-weight"
                variant={'filled'}
                value={prop.inputValue}
                type={'color'}
                onChange={(event) => handleColorInputChange(event, index, componentName)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Palette />
                        </InputAdornment>
                    ),
                }}
                label={`${prop.propName}:${prop.inputType}`}
                helperText={prop.helperText}
            />
        );
    };

    const blockTitle = (componentName: string): JSX.Element => {
        return (
            <Typography display={'block'} variant={'overline'} color={'primary'}>
                {componentName}
            </Typography>
        );
    };

    const propBlockForNestedComponent = (
        componentName: string,
        nestedChild: nestedChildrenType,
        parentID: number
    ): JSX.Element => {
        return (
            <Box key={`${componentName}-${parentID}`}>
                {nestedChild.nestedChildrenProps?.map((prop: propsType, index: number) =>
                    propBlock(componentName, prop, `${parentID}-${index}`)
                )}
            </Box>
        );
    };

    const propBlock = (componentName: string, prop: propsType, index: number | string): JSX.Element => {
        return (
            <Box key={`${componentName}-${index}`}>
                {prop.inputType === 'select'
                    ? renderSelect(prop, `${componentName}-${index}`, componentName)
                    : undefined}
                {prop.inputType === 'boolean'
                    ? renderBoolean(prop, `${componentName}-${index}`, componentName)
                    : undefined}
                {prop.inputType === 'string'
                    ? renderTextField(prop, `${componentName}-${index}`, componentName)
                    : undefined}
                {prop.inputType === 'colorPicker'
                    ? renderColorInput(prop, `${componentName}-${index}`, componentName)
                    : undefined}
            </Box>
        );
    };

    const renderDrawerInput = (entry: componentType, index: number) => {
        return (
            <Box key={index}>
                {blockTitle(entry.componentName)}
                {entry.props?.map((prop: propsType, index: number) => propBlock(entry.componentName, prop, index))}
                {entry.nestedChildren?.map((nestedChild: nestedChildrenType, parentId: number) =>
                    propBlockForNestedComponent(entry.componentName, nestedChild, parentId)
                )}
                {entry.nestedChildren?.map((nestedChild: nestedChildrenType) =>
                    nestedChild.nestedComponets?.map((nestedComponent: componentType, index: number) => (
                        <Box key={index}>
                            {blockTitle(nestedComponent.componentName)}
                            {nestedComponent.props?.map((prop: propsType, index: number) =>
                                propBlock(nestedComponent.componentName, prop, index)
                            )}
                        </Box>
                    ))
                )}
            </Box>
        );
    };

    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const drawerKnobs = () => (
        <Box sx={{ width: 375, p: 2 }} role="presentation">
            <Box>{renderDrawerInputs()}</Box>
        </Box>
    );

    return (
        <div>
            <React.Fragment key={'right'}>
                <Drawer
                    PaperProps={{
                        sx: {
                            mt: '112px',
                        },
                    }}
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                    variant={'persistent'}
                >
                    {drawerKnobs()}
                </Drawer>
            </React.Fragment>
        </div>
    );
};

export default TemporaryDrawer;
