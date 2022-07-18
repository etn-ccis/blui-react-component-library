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

type TableClassesData = {
    name: string;
    description: string;
};

interface TableProps {
    data: Array<TableClassesData>;
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

const ClassesTable = (props: TableProps) => {
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
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((Propsdata) => (
                            <StyledTableRow key={Propsdata.name}>
                                <TableCell component="th" scope="Propsdata">
                                    {Propsdata.name}
                                </TableCell>
                                <TableCell>{Propsdata.description}</TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ClassesTable;
