import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import updateDrawerComponent from '../../redux/drawerComponent';
import { propsType, componentType } from '../../data/DrawerTypesNew';
import { RootState } from '../../redux/store';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Select from '@mui/material/Select';
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

    const handleTextChange = (
        event: React.ChangeEvent<{ value: unknown }>,
        index: number,
        componentName: string
    ): void => {
        const compo = drawerJson.find((o: componentType) => o.componentName === componentName);
        const newPropState: any[] = [];
        newPropState.push(
            compo?.props?.map((obj: propsType, id: number) =>
                id === index ? { ...obj, inputValue: String(event.target.value) } : obj
            )
        );
        const newState = drawerJson.map((obj: componentType, id: number) =>
            obj.componentName === componentName ? { ...obj, props: newPropState[0] } : obj
        );

        console.log('newState', newState);
        // dispatch(updateDrawerComponent(newState, updateDrawerComponent));
    };

    const renderSelect = (prop: propsType, index: number) => {
        return (
            <FormControl variant={'filled'} sx={{ width: '100%' }}>
                <InputLabel>Label</InputLabel>
                <Select value={prop.currentValue}>
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

    const renderBoolean = (prop: propsType, index: number) => {
        return (
            <>
                <FormControlLabel
                    control={<Checkbox checked={prop.inputValue as boolean} name={prop.propName} color="primary" />}
                    label={`${prop.propName}: ${prop.propType}`}
                />
                <FormHelperText>{prop.helperText}</FormHelperText>
            </>
        );
    };

    const renderTextField = (prop: propsType, index: number, componentName: string) => {
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

    const renderColorInput = (prop: propsType, index: number) => {
        return (
            <TextField
                sx={{ width: '100%' }}
                id="filled-adornment-weight"
                variant={'filled'}
                value={prop.inputValue}
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

    const renderDrawerInput = (entry: componentType, index: number) => {
        return (
            <Box key={index}>
                <Typography display={'block'} variant={'overline'} color={'primary'}>
                    {entry.componentName}
                </Typography>
                {entry.props?.map((prop: propsType, index: number) => (
                    <Box key={index}>
                        {prop.inputType === 'select' ? renderSelect(prop, index) : undefined}
                        {prop.inputType === 'boolean' ? renderBoolean(prop, index) : undefined}
                        {prop.inputType === 'string' ? renderTextField(prop, index, entry.componentName) : undefined}
                        {prop.inputType === 'colorPicker' ? renderColorInput(prop, index) : undefined}
                    </Box>
                ))}
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

    const list = () => (
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
                    {list()}
                </Drawer>
            </React.Fragment>
        </div>
    );
};

export default TemporaryDrawer;
