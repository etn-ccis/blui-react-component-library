import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import { Colorize, QuestionMark } from '@mui/icons-material';
import Color from 'color';
import _debounce from 'lodash.debounce';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { PlaygroundComponentProp } from '../types';

type ColorPickerProps = TextFieldProps & {
    propData: PlaygroundComponentProp;
    allowMUIColors?: boolean;
};

const HEX = /^#[0-9a-f]{6}$/i;
const MUI_COLOR = /^(primary|secondary|error|success|warning|info|text)\.(main|dark|light|contrastText)$/;
const MUI_GREY = /^(grey)\.(50|100|200|300|400|500|600|700|800|900|A100|A200|A400|A700)$/;
const MUI_COMMON = /^(common)\.(white|black)$/;
const MUI_TEXT = /^(text)\.(primary|secondary|disabled)$/;
const MUI_DIVIDER = /^divider$/;
const MUI_BACKGROUND = /^(background)\.(paper|default)$/;
const MUI_ACTION = /^(action)\.(active|hover|selected|disabled|disabledBackground|focus)$/;

const muiRegex = [MUI_COLOR, MUI_GREY, MUI_COMMON, MUI_TEXT, MUI_DIVIDER, MUI_BACKGROUND, MUI_ACTION];

const colorIsValid = (color: string, useMui = false): boolean => {
    try {
        Color(color);
        return true;
    } catch (e) {
        if (useMui) {
            for (let i = 0; i < muiRegex.length; i++) {
                if (muiRegex[i].test(color)) {
                    return true;
                }
            }
        }
        return false;
    }
};

export const ColorPicker = (props: ColorPickerProps): JSX.Element => {
    const { propData, allowMUIColors = false, ...textFieldProps } = props;
    const [color, setColor] = useState<string>(propData.inputValue as string);

    const handleColorChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>): void => {
            textFieldProps.onChange?.(e);
        },
        [textFieldProps.onChange]
    );

    const validColor = colorIsValid(color, allowMUIColors) || (!propData.required && color === '');

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
            <TextField
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
                                    {validColor ? <Colorize /> : <QuestionMark />}
                                    <Box
                                        sx={{
                                            mt: 0.5,
                                            height: 8,
                                            width: 40,
                                            bgcolor:
                                                color === '' ? 'text.primary' : validColor ? color : 'common.white',
                                            borderWidth: 1,
                                            borderStyle: 'solid',
                                            borderColor: 'divider',
                                        }}
                                    />
                                </Stack>
                                <input
                                    value={HEX.test(color) ? color : '#000000'}
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
                label={`${propData.label ? propData.label : propData.propName}${
                    propData.label ? '' : `:${propData.propType}`
                }`}
                error={!validColor}
                helperText={validColor ? propData.helperText : 'Color value not recognized'}
            />
        </>
    );
};
