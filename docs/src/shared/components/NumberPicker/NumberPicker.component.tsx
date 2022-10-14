import React, { ChangeEvent, useCallback } from 'react';
import {
    Box,
    ClickAwayListener,
    Collapse,
    IconButton,
    Paper,
    Slider,
    Stack,
    TextField as MuiTextField,
    TextFieldProps as MuiTextFieldProps,
} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { PropsType } from '../../../__types__';

type NumberPickerProps = MuiTextFieldProps & {
    propData: PropsType;
};

export const NumberPicker = (props: NumberPickerProps): JSX.Element => {
    const { propData, ...textFieldProps } = props;

    // Slider Popover
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleOpen = (event: React.MouseEvent<HTMLDivElement>): void => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (): void => {
        setAnchorEl(null);
    };

    const handleNumberChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>): void => {
            textFieldProps.onChange?.(e);
        },
        [textFieldProps.onChange]
    );

    return (
        <Box sx={{ position: 'relative' }}>
            <MuiTextField
                {...textFieldProps}
                onChange={(e): void => {
                    // only allow numeric values to be typed in
                    if (!/^[0-9]*$/.test(e.target.value)) return;
                    handleNumberChange(e as ChangeEvent<HTMLInputElement>);
                }}
                variant={'filled'}
                type={'number'}
                onClick={handleOpen}
                InputProps={{
                    endAdornment: (
                        // We fake the increment/decrement buttons so we can stop the event propagation (otherwise every increment toggles the slider panel)
                        <InputAdornment position="end">
                            <Stack>
                                <IconButton
                                    size={'small'}
                                    sx={{ height: 10, width: 10, p: 0.75 }}
                                    onClick={(e): void => {
                                        e.stopPropagation();
                                        const newValue = (propData.inputValue as number) + 1;
                                        handleNumberChange({ target: { value: newValue } } as any);
                                    }}
                                >
                                    <ArrowDropUp />
                                </IconButton>
                                <IconButton
                                    size={'small'}
                                    sx={{ height: 10, width: 10, p: 0.75 }}
                                    onClick={(e): void => {
                                        e.stopPropagation();
                                        const newValue = (propData.inputValue as number) - 1;
                                        handleNumberChange({ target: { value: newValue } } as any);
                                    }}
                                >
                                    <ArrowDropDown />
                                </IconButton>
                            </Stack>
                        </InputAdornment>
                    ),
                }}
                value={propData.inputValue as number}
                label={`${propData.label ? propData.label : propData.propName}: ${propData.propType}`}
                helperText={propData.helperText}
            />

            {/* The range slider popover */}
            <Collapse
                in={open}
                unmountOnExit
                sx={{ position: 'absolute', top: 'calc(100% - 20px)', left: 0, right: 0, zIndex: 1000 }}
            >
                <Paper square sx={{ p: 1, width: '100%' }}>
                    <ClickAwayListener onClickAway={handleClose}>
                        <Slider
                            value={propData.inputValue === '' ? 0 : (propData.inputValue as number)}
                            size={'small'}
                            step={propData.rangeData?.step}
                            marks
                            min={propData.rangeData?.min}
                            max={propData.rangeData?.max}
                            sx={{ width: '100%' }}
                            onChange={(event, value): void => handleNumberChange({ target: { value: value } } as any)}
                        />
                    </ClickAwayListener>
                </Paper>
            </Collapse>
        </Box>
    );
};
