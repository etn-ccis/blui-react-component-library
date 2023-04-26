import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { PlaygroundComponentProp } from '../types';

type CustomTextFieldProps = TextFieldProps & {
    propData: PlaygroundComponentProp;
};

export const DocTextField = (props: CustomTextFieldProps): JSX.Element => {
    const { propData, ...textFieldProps } = props;
    const isRequiredPropEmpty = propData.required && propData.inputValue === '';
    return (
        <TextField
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
