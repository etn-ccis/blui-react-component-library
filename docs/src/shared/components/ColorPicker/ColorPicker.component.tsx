import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { Box, IconButton, Stack, TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { Colorize } from '@mui/icons-material';
import { PropsType } from '../../../__types__';
import Color from 'color';
import _debounce from 'lodash.debounce';

type ColorPickerProps = MuiTextFieldProps & {
    propData: PropsType;
};

const HEX = /^#[0-9a-f]{6}$/i;
const MUI_COLOR = /^(primary|secondary|error|success|warning|info|text)\.(main|dark|light|contrastText)$/;
const MUI_GREY = /^(grey)\.(50|100|200|300|400|500|600|700|800|900|A100|A200|A400|A700)$/;
const MUI_COMMON = /^(common)\.(white|black)$/;
const MUI_TEXT = /^(text)\.(primary|secondary|disabled)$/;
const MUI_DIVIDER = /^divider$/;
const MUI_BACKGROUND = /^(background)\.(paper|default)$/;
const MUI_ACTION = /^(action)\.(active|hover|selected|disabled|disabledBackground|focus)$/;

const colorRegex = [MUI_COLOR, MUI_GREY, MUI_COMMON, MUI_TEXT, MUI_DIVIDER, MUI_BACKGROUND, MUI_ACTION];

const colorIsValid = (color: string): boolean => {
    try {
        Color(color);
        return true;
    } catch (e) {
        for (let i = 0; i < colorRegex.length; i++) {
            if (colorRegex[i].test(color)) {
                return true;
            }
        }
        return false;
    }
};

export const ColorPicker = (props: ColorPickerProps): JSX.Element => {
    const { propData, ...textFieldProps } = props;
    const [color, setColor] = useState<string>(propData.inputValue as string);

    const handleColorChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>): void => {
            textFieldProps.onChange?.(e);
        },
        [textFieldProps.onChange]
    );

    const validColor = colorIsValid(color) || (!propData.required && color === '');

    // debounce the color change events to 1 per 300ms
    const handleColorChangeDebounced = useMemo(() => _debounce(handleColorChange, 300), [handleColorChange]);

    // cancel the debounce event if we unmount before it executes
    useEffect(
        () => () => {
            handleColorChangeDebounced.cancel();
        },
        [handleColorChangeDebounced]
    );

    return (
        <>
            <MuiTextField
                {...textFieldProps}
                onChange={(e): void => {
                    setColor(e.target.value);
                    handleColorChangeDebounced(e as ChangeEvent<HTMLInputElement>);
                }}
                variant={'filled'}
                type={'text'}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton sx={{ position: 'relative' }}>
                                <Stack alignItems={'center'}>
                                    <Colorize />
                                    <Box sx={{ mt: 0.5, height: 8, width: 40, bgcolor: color }} />
                                </Stack>
                                <input
                                    value={HEX.test(color) ? color : undefined}
                                    type={'color'}
                                    style={{
                                        position: 'absolute',
                                        opacity: 0,
                                        cursor: 'pointer',
                                        height: '100%',
                                        width: '100%',
                                    }}
                                    onChange={(e): void => {
                                        setColor(e.target.value);
                                        handleColorChangeDebounced(e);
                                    }}
                                />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                value={color}
                label={`${propData.propName}: ${propData.propType}`}
                error={!validColor}
                helperText={validColor ? propData.helperText : 'Invalid color format'}
            />
        </>
    );
};
