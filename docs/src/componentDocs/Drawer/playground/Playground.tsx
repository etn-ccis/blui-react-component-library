import * as React from 'react';
import Box from '@mui/material/Box';
import {
    updateDrawerProps,
    updateDrawerHeaderProps,
    updateDrawerBodyProps,
    updateDrawerNavGroupProps,
    updateDrawerNavItemProps,
    updateDrawerFooterProps,
    updateDrawerOtherProps,
} from '../../../redux/drawerComponent';
import { PropsType, ComponentType } from '../../../__types__';
import { RootState } from '../../../redux/store';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { DocTextField, DocColorField } from '../../../shared';
import PlaygroundDrawer from '../../../shared/PlaygroundDrawer';

const DrawerPlayground = () => {
    const [alignment, setAlignment] = React.useState('props');
    const dispatch = useAppDispatch();
    const drawerJson = useAppSelector((state: RootState) => state.drawerComponentData.drawerComponent);
    const otherProps = drawerJson.filter((entry: ComponentType) => entry.otherProps);

    const renderDrawerInputs = () =>
        drawerJson.map((entry: ComponentType, index: number) => renderDrawerInput(entry, index));

    const renderDrawerOtherInputs = () =>
        otherProps.map((entry: ComponentType, index: number) => renderDrawerOtherInput(entry, index));

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
            case 'DrawerNavItem':
                dispatch(updateDrawerNavItemProps(newPropState));
                break;
            case 'DrawerFooter':
                dispatch(updateDrawerFooterProps(newPropState));
                break;
            case 'OtherProps':
                dispatch(updateDrawerOtherProps(newPropState));
                break;
            default:
                dispatch(updateDrawerProps(newPropState));
                break;
        }
    };

    const updatePropsValue = (
        value: string,
        props: PropsType[],
        componentId: string,
        propId: string,
        inputComponent?: string
    ) =>
        inputComponent === 'select'
            ? props?.map((prop: PropsType, id: number) =>
                  `${componentId}-${id}` === propId ? { ...prop, defaultValue: value } : prop
              )
            : props?.map((prop: PropsType, id: number) =>
                  `${componentId}-${id}` === propId ? { ...prop, inputValue: value } : prop
              );

    const updateProps = (value: any, index: string, componentName: string, inputComponent?: string) => {
        const component = drawerJson.find((comp: ComponentType) => comp.componentName === componentName);
        if (componentName === 'DrawerNavGroup') {
            const findDrawerNavGroupID = index.slice(index.indexOf(componentName) + componentName.length + 1);
            const drawerNavGroupId = findDrawerNavGroupID.substring(0, componentName.length + 2);
            const nestedComponent = drawerJson.find((comp: ComponentType) => comp.id === drawerNavGroupId);
            const newDrawerNavGroupProps = updatePropsValue(
                value,
                nestedComponent?.props as PropsType[],
                `${componentName}-${drawerNavGroupId}`,
                index
            );
            let updateNavGroup: any = {};
            updateNavGroup = {
                props: newDrawerNavGroupProps,
                id: drawerNavGroupId,
            };
            dispatchActions(componentName, updateNavGroup);
        } else if (componentName === 'DrawerNavItem') {
            const findDrawerNavItemID = index.slice(index.indexOf(componentName) + componentName.length + 1);
            const drawerNavItemId = findDrawerNavItemID.substring(0, componentName.length + 2);
            const nestedComponent = drawerJson.find((comp: ComponentType) => comp.id === drawerNavItemId);
            const newDrawerNavItemProps = updatePropsValue(
                value,
                nestedComponent?.props as PropsType[],
                `${componentName}-${drawerNavItemId}`,
                index
            );
            let updateNavItem: any = {};
            updateNavItem = {
                props: newDrawerNavItemProps,
                id: drawerNavItemId,
            };
            dispatchActions(componentName, updateNavItem);
        } else {
            if (index.indexOf('other') > 0) {
                const newComponentProp = updatePropsValue(
                    value,
                    component?.otherProps as PropsType[],
                    `${componentName}-other`,
                    index
                );
                dispatchActions('OtherProps', newComponentProp);
            } else {
                const newComponentProp = updatePropsValue(
                    value,
                    component?.props as PropsType[],
                    `${componentName}`,
                    index,
                    inputComponent
                );
                dispatchActions(componentName, newComponentProp);
            }
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

    const handleToggleBtnChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
        setAlignment(newAlignment);
    };

    const renderSelect = (prop: PropsType, index: string, componentName: string) => (
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

    const renderBoolean = (prop: PropsType, index: string, componentName: string) => (
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

    const renderTextField = (prop: PropsType, index: string, componentName: string) => (
        <DocTextField
            key={index}
            sx={{ width: '100%' }}
            propData={prop}
            onChange={(event) => handleTextChange(event, index, componentName)}
        />
    );

    const renderColorInput = (prop: PropsType, index: string, componentName: string) => (
        <DocColorField
            sx={{ width: '100%' }}
            key={index}
            propData={prop}
            onChange={(event) => handleColorInputChange(event, index, componentName)}
        />
    );

    const blockTitle = (componentName: string): JSX.Element => (
        <Typography display={'block'} variant={'overline'} color={'primary'}>
            {componentName}
        </Typography>
    );

    const propBlockForNestedComponent = (
        componentName: string,
        prop: PropsType,
        index: number,
        id: string
    ): JSX.Element => <Box key={`${id}-${index}`}>{propBlock(componentName, prop, `${id}-${index}`)}</Box>;

    const propBlock = (componentName: string, prop: PropsType, index: number | string): JSX.Element => (
        <Box key={`${componentName}-${index}`}>
            {prop.inputType === 'select' ? renderSelect(prop, `${componentName}-${index}`, componentName) : undefined}
            {prop.inputType === 'boolean' ? renderBoolean(prop, `${componentName}-${index}`, componentName) : undefined}
            {prop.inputType === 'string'
                ? renderTextField(prop, `${componentName}-${index}`, componentName)
                : undefined}
            {prop.inputType === 'colorPicker'
                ? renderColorInput(prop, `${componentName}-${index}`, componentName)
                : undefined}
        </Box>
    );

    const renderDrawerInput = (entry: ComponentType, index: number) => (
        <Box key={index}>
            {blockTitle(entry.componentName)}
            {entry.id
                ? entry.props?.map((prop: PropsType, index: number) =>
                      propBlockForNestedComponent(entry.componentName, prop, index, entry.id as string)
                  )
                : entry.props?.map((prop: PropsType, index: number) => propBlock(entry.componentName, prop, index))}
        </Box>
    );

    const renderDrawerOtherInput = (entry: ComponentType, index: number) => (
        <Box key={index}>
            {blockTitle(entry.componentName)}
            {entry.otherProps &&
                entry.otherProps?.map((prop: PropsType, index: number) =>
                    propBlock(entry.componentName, prop, `other-${index}`)
                )}
        </Box>
    );

    const drawerKnobs = () => (
        <Box sx={{ width: 375, p: 2 }} role="presentation">
            <Box>{renderDrawerInputs()}</Box>
        </Box>
    );

    const otherKnobs = () => (
        <Box sx={{ width: 375, p: 2 }} role="presentation">
            <Box>{renderDrawerOtherInputs()}</Box>
        </Box>
    );

    return (
        <PlaygroundDrawer
            drawerContent={
                <Box>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleToggleBtnChange}
                        sx={{
                            p: '16px 16px 0',
                            width: '100%',
                            '& .MuiButtonBase-root': {
                                width: '50%',
                            },
                        }}
                    >
                        <ToggleButton value="props">Props</ToggleButton>
                        <ToggleButton value="other">Other</ToggleButton>
                    </ToggleButtonGroup>
                    {alignment === 'props' ? drawerKnobs() : otherKnobs()}
                </Box>
            }
        />
    );
};

export default DrawerPlayground;
