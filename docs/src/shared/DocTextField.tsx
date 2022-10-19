import React from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { PropsType } from '../__types__';

type TextFieldProps = MuiTextFieldProps & {
    propData: PropsType;
};

export const DocTextField = (props: TextFieldProps): JSX.Element => {
    const { propData, ...textFieldProps } = props;
    const isRequiredPropEmpty = propData.required && propData.inputValue === '';
    return (
        <MuiTextField
            {...textFieldProps}
            variant={'filled'}
            value={propData.inputValue}
            label={`${propData.label ? propData.label : propData.propName}: ${propData.propType}`}
            helperText={isRequiredPropEmpty ? `${propData.propName} is required` : propData.helperText}
            disabled={propData.disabled}
            error={isRequiredPropEmpty}
        />
    );
};
