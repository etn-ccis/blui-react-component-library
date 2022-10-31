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

const floatMath = (value: string | number, step: number): number => {
    const valueDecimal = value.toString().indexOf('.') + 1;
    const valueDecimalPlaces = value.toString().length - valueDecimal;
    const stepDecimal = step.toString().indexOf('.') + 1;
    const stepDecimalPlaces = step.toString().length - stepDecimal;

    const floatCorrectionFactor = Math.pow(10, Math.max(valueDecimalPlaces, stepDecimalPlaces));
    // floating point math correction
    return ((value as number) * floatCorrectionFactor + step * floatCorrectionFactor) / floatCorrectionFactor;
};

export const NumberPicker = (props: NumberPickerProps): JSX.Element => {
    const { propData, ...textFieldProps } = props;
    const {
        step: stepSize = 1,
        min = Number.MIN_SAFE_INTEGER,
        max = Number.MAX_SAFE_INTEGER,
    } = propData?.rangeData || {};

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
                    if (e.target.value && !/^\d+(?:[.]\d+)?$/.test(e.target.value)) return;
                    handleNumberChange(e as ChangeEvent<HTMLInputElement>);
                }}
                inputProps={{
                    min: propData?.rangeData?.min,
                    max: propData?.rangeData?.max,
                    step: stepSize,
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
                                        const newValue = Math.min(
                                            max,
                                            floatMath(propData.inputValue as number, stepSize)
                                        );
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
                                        const newValue = Math.max(
                                            min,
                                            floatMath(propData.inputValue as number, -1 * stepSize)
                                        );
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
