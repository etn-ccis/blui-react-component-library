import React from 'react';
import { Avatar, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Check } from '@mui/icons-material';
/*
 * cannot iterate through variations due to the way our chips are structured
 */

export const ChipDemo: JSX.Element = (
    <TableContainer>
        <Table key={'button'}>
            <TableHead>
                <TableRow>
                    <TableCell>Unselected</TableCell>
                    <TableCell>Selected</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Chip
                            clickable
                            avatar={<Avatar />}
                            label={`Default`}
                            onDelete={(): void => {
                                /* do nothing */
                            }}
                        />
                    </TableCell>
                    <TableCell>
                        <Chip
                            clickable
                            icon={<Check />}
                            label={`Default`}
                            color={'primary'}
                            onDelete={(): void => {
                                /* do nothing */
                            }}
                        />
                        <Chip
                            clickable
                            icon={<Check />}
                            label={`Default`}
                            color={'secondary'}
                            onDelete={(): void => {
                                /* do nothing */
                            }}
                            sx={{ ml: 1 }}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Chip
                            disabled
                            avatar={<Avatar />}
                            label={`Default disabled`}
                            onDelete={(): void => {
                                /* do nothing */
                            }}
                        />
                    </TableCell>
                    <TableCell>
                        <Chip
                            disabled
                            icon={<Check />}
                            label={`Default disabled`}
                            color={'primary'}
                            onDelete={(): void => {
                                /* do nothing */
                            }}
                        />
                        <Chip
                            disabled
                            icon={<Check />}
                            label={`Default disabled`}
                            color={'secondary'}
                            onDelete={(): void => {
                                /* do nothing */
                            }}
                            sx={{ ml: 1 }}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Chip
                            clickable
                            variant={'outlined'}
                            avatar={<Avatar />}
                            label={`Outlined`}
                            onDelete={(): void => {
                                /* do nothing */
                            }}
                        />
                    </TableCell>
                    <TableCell>
                        <Chip
                            clickable
                            variant={'outlined'}
                            icon={<Check />}
                            label={`Outlined`}
                            color={'primary'}
                            onDelete={(): void => {
                                /* do nothing */
                            }}
                        />
                        <Chip
                            clickable
                            variant={'outlined'}
                            icon={<Check />}
                            label={`Outlined`}
                            color={'secondary'}
                            onDelete={(): void => {
                                /* do nothing */
                            }}
                            sx={{ ml: 1 }}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Chip
                            disabled
                            avatar={<Avatar />}
                            variant={'outlined'}
                            label={`Outlined disabled`}
                            onDelete={(): void => {
                                /* do nothing */
                            }}
                        />
                    </TableCell>
                    <TableCell>
                        <Chip
                            disabled
                            icon={<Check />}
                            variant={'outlined'}
                            label={`Outlined disabled`}
                            color={'primary'}
                            onDelete={(): void => {
                                /* do nothing */
                            }}
                        />
                        <Chip
                            disabled
                            icon={<Check />}
                            variant={'outlined'}
                            label={`Outlined disabled`}
                            color={'secondary'}
                            onDelete={(): void => {
                                /* do nothing */
                            }}
                            sx={{ ml: 1 }}
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
);
