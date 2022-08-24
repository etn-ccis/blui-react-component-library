import * as React from 'react';
import Box from '@mui/material/Box';
import { updateDrawerProps, updateDrawerOtherProps } from '../../../redux/drawerComponent';
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
import Slider from '@mui/material/Slider';

const PropsPlayground = (): JSX.Element => {
    const [alignment, setAlignment] = React.useState('props');
    const dispatch = useAppDispatch();
    const drawerJson = useAppSelector((state: RootState) => state.drawerComponentData.drawerComponent);
    const otherProps = drawerJson.filter((entry: ComponentType) => entry.otherProps);

    const dispatchActions = (componentName: string, newPropState: any): void => {
        switch (componentName) {
            case 'Drawer':
                dispatch(updateDrawerProps(newPropState));
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
    ): any =>
        inputComponent === 'select'
            ? props?.map((prop: PropsType, id: number) =>
                  `${componentId}-${id}` === propId ? { ...prop, defaultValue: value } : prop
              )
            : props?.map((prop: PropsType, id: number) =>
                  `${componentId}-${id}` === propId ? { ...prop, inputValue: value } : prop
              );

    const updateProps = (value: any, index: string, componentName: string, inputComponent?: string): void => {
        const component = drawerJson.find((comp: ComponentType) => comp.componentName === componentName);
        if (index.indexOf('other') > 0) {
            const newComponentProp = updatePropsValue(
                value,
                component?.otherProps as PropsType[],
                `${componentName}-other`,
                index,
                inputComponent
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
    };

    const handleSelectChange = (
        event: SelectChangeEvent,
        index: string,
        componentName: string,
        inputComponent: string
    ): void => {
        updateProps(String(event.target.value), index, componentName, inputComponent);
    };

    const handleSliderChange = (newValue: number | number[], index: string, componentName: string): void => {
        updateProps(newValue, index, componentName);
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

    const handleToggleBtnChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string): void => {
        setAlignment(newAlignment);
    };

    const blockTitle = (componentName: string): JSX.Element => (
        <Typography display={'block'} variant={'overline'} color={'primary'}>
            {componentName}
        </Typography>
    );

    const renderSelect = (prop: PropsType, index: string, componentName: string): JSX.Element => (
        <FormControl variant={'filled'} sx={{ width: '100%' }}>
            <InputLabel>{`${prop.propName}: ${prop.propType}`}</InputLabel>
            <Select
                value={prop.defaultValue as string}
                onChange={(event): void => handleSelectChange(event, index, componentName, 'select')}
            >
                {Array.isArray(prop.inputValue)
                    ? prop.inputValue.map(
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

    const renderBoolean = (prop: PropsType, index: string, componentName: string): JSX.Element => (
        <>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={prop.inputValue as boolean}
                        name={prop.propName}
                        color="primary"
                        onChange={(event): void => handleCheckboxChange(event, index, componentName)}
                    />
                }
                label={`${prop.propName}: ${prop.propType}`}
            />
            <FormHelperText>{prop.helperText}</FormHelperText>
        </>
    );

    const renderSlider = (prop: PropsType, index: string, componentName: string): JSX.Element => (
        <>
            <Typography component="span">{`${prop.propName}: ${prop.propType}`}</Typography>
            <Slider
                value={prop.inputValue as number}
                valueLabelDisplay="on"
                step={prop.inputSets?.step}
                marks
                min={prop.inputSets?.min}
                max={prop.inputSets?.max}
                onChange={(event, value): void => handleSliderChange(value, index, componentName)}
            />
            <FormHelperText>{prop.helperText}</FormHelperText>
        </>
    );

    const renderTextField = (prop: PropsType, index: string, componentName: string): JSX.Element => (
        <DocTextField
            key={index}
            sx={{ width: '100%' }}
            propData={prop}
            onChange={(event): void => handleTextChange(event, index, componentName)}
        />
    );

    const renderColorInput = (prop: PropsType, index: string, componentName: string): JSX.Element => (
        <DocColorField
            sx={{ width: '100%' }}
            key={index}
            propData={prop}
            onChange={(event): void => handleColorInputChange(event, index, componentName)}
        />
    );

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
            {prop.inputType === 'number' ? renderSlider(prop, `${componentName}-${index}`, componentName) : undefined}
        </Box>
    );

    const renderDrawerInput = (entry: ComponentType, index: number): JSX.Element => (
        <Box key={index}>
            {blockTitle(entry.componentName)}
            {entry.props?.map((prop: PropsType, nestedIndex: number) =>
                propBlock(entry.componentName, prop, nestedIndex)
            )}
        </Box>
    );

    const renderDrawerOtherInput = (entry: ComponentType, index: number): JSX.Element => (
        <Box key={index}>
            {blockTitle(entry.componentName)}
            {entry.otherProps &&
                entry.otherProps?.map((prop: PropsType, otherPropId: number) =>
                    propBlock(entry.componentName, prop, `other-${otherPropId}`)
                )}
        </Box>
    );

    const renderDrawerInputs = (): JSX.Element[] =>
        drawerJson.map((entry: ComponentType, index: number) => renderDrawerInput(entry, index));

    const renderDrawerOtherInputs = (): JSX.Element[] =>
        otherProps.map((entry: ComponentType, index: number) => renderDrawerOtherInput(entry, index));

    const drawerKnobs = (): JSX.Element => (
        <Box sx={{ width: 375, p: 2 }} role="presentation">
            <Box>{renderDrawerInputs()}</Box>
        </Box>
    );

    const otherKnobs = (): JSX.Element => (
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

export default PropsPlayground;
