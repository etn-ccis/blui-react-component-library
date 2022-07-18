import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

type TableData = {
    prop: string;
    description: string;
    type: string;
    required: string;
    defaultValue: string;
};
interface TableProps {
    data: Array<TableData>;
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const PropsTable = (props: TableProps) => {
    const { data } = props;
    return (
        <Box
            sx={{
                overflow: 'auto',
            }}
        >
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Prop Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Required</TableCell>
                            <TableCell>Default</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((Propsdata) => (
                            <StyledTableRow key={Propsdata.prop}>
                                <TableCell component="th" scope="Propsdata">
                                    {Propsdata.prop}
                                </TableCell>
                                <TableCell>{Propsdata.description}</TableCell>
                                <TableCell>{Propsdata.type}</TableCell>
                                <TableCell>{Propsdata.required}</TableCell>
                                <TableCell>{Propsdata.defaultValue}</TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default PropsTable;
