import React from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { PropsType } from '../__types__';
import InputAdornment from '@mui/material/InputAdornment';
import { Palette } from '@mui/icons-material';
type TextFieldProps = MuiTextFieldProps & {
    propData: PropsType;
};

export const DocColorField = (props: TextFieldProps): JSX.Element => {
    const { propData, ...textFieldProps } = props;

    return (
        <MuiTextField
            {...textFieldProps}
            variant={'filled'}
            type={'color'}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <Palette />
                    </InputAdornment>
                ),
            }}
            value={propData.inputValue}
            label={`${propData.propName}:${propData.inputType}`}
            helperText={propData.helperText}
        />
    );
};
