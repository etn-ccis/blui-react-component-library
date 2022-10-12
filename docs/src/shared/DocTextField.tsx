import React from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { PropsType } from '../__types__';

type TextFieldProps = MuiTextFieldProps & {
    propData: PropsType;
};

export const DocTextField = (props: TextFieldProps): JSX.Element => {
    const { propData, ...textFieldProps } = props;

    return (
        <MuiTextField
            {...textFieldProps}
            variant={'filled'}
            value={propData.inputValue}
            label={`${propData.propName}: ${propData.propType} ${propData.required ? '*' : ''}`}
            helperText={propData.helperText}
            disabled={propData.disabled}
        />
    );
};
