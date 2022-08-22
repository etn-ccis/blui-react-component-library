import React from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { propsType } from '../__types__';

type TextFieldProps = MuiTextFieldProps & {
    propData: propsType;
};

export const DocTextField = (props: TextFieldProps): JSX.Element => {
    const { propData, ...textFieldProps } = props;

    return (
        <MuiTextField
            {...textFieldProps}
            variant={'filled'}
            value={propData.inputValue}
            label={`${propData.propName}:${propData.inputType}`}
            helperText={propData.helperText}
        />
    );
};
