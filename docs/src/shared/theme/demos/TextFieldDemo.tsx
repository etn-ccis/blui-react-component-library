import React from 'react';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TextField,
    InputAdornment,
    IconButton,
    TableContainer,
} from '@mui/material';
import { Visibility } from '@mui/icons-material';

/*
 * cannot iterate through variations due to the way MUI implemented text fields
 */

export const TextFieldDemo: JSX.Element = (
    <TableContainer>
        <Table key={'text-field'}>
            <TableHead>
                <TableRow>
                    <TableCell>Enabled</TableCell>
                    <TableCell>Disabled</TableCell>
                    <TableCell>Error</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow key={'filled'}>
                    <TableCell key={'enabled'}>
                        <TextField
                            variant={'filled'}
                            label={'Filled Enabled'}
                            helperText={'Helper Text'}
                            placeholder={'Placeholder text'}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={undefined} edge={'end'}>
                                            <Visibility />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </TableCell>
                    <TableCell key={'disabled'}>
                        <TextField
                            variant={'filled'}
                            helperText={'Helper Text'}
                            label={'Filled Disabled'}
                            placeholder={'Placeholder text'}
                            disabled
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={undefined} edge={'end'} disabled>
                                            <Visibility />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </TableCell>
                    <TableCell key={'error'}>
                        <TextField
                            variant={'filled'}
                            label={'Filled Error'}
                            helperText={'Helper Text'}
                            placeholder={'Placeholder text'}
                            error
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={undefined} edge={'end'}>
                                            <Visibility />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </TableCell>
                </TableRow>
                <TableRow key={'outlined'}>
                    <TableCell key={'enabled'}>
                        <TextField
                            variant={'outlined'}
                            label={'Outlined Enabled'}
                            helperText={'Helper Text'}
                            placeholder={'Placeholder text'}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={undefined} edge={'end'}>
                                            <Visibility />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </TableCell>
                    <TableCell key={'disabled'}>
                        <TextField
                            variant={'outlined'}
                            disabled
                            label={'Outlined Disabled'}
                            helperText={'Helper Text'}
                            placeholder={'Placeholder text'}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={undefined} disabled edge={'end'}>
                                            <Visibility />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </TableCell>
                    <TableCell key={'error'}>
                        <TextField
                            variant={'outlined'}
                            error
                            label={'Outlined Error'}
                            helperText={'Helper Text'}
                            placeholder={'Placeholder text'}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={undefined} edge={'end'}>
                                            <Visibility />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </TableCell>
                </TableRow>
                <TableRow key={'standard'}>
                    <TableCell key={'enabled'}>
                        <TextField
                            variant={'standard'}
                            label={'Underlined Enabled'}
                            helperText={'Helper Text'}
                            placeholder={'Placeholder text'}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={undefined} edge={'end'}>
                                            <Visibility />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </TableCell>
                    <TableCell key={'disabled'}>
                        <TextField
                            variant={'standard'}
                            disabled
                            label={'Underlined Disabled'}
                            helperText={'Helper Text'}
                            placeholder={'Placeholder text'}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={undefined} disabled edge={'end'}>
                                            <Visibility />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </TableCell>
                    <TableCell key={'error'}>
                        <TextField
                            variant={'standard'}
                            error
                            label={'Underlined Error'}
                            helperText={'Helper Text'}
                            placeholder={'Placeholder text'}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={undefined} edge={'end'}>
                                            <Visibility />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
);
