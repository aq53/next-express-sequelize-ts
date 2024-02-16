import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const classes = {
    table: {
        minWidth: 650, // Set your desired minimum width
    },
};


interface IObject{
    [key:string]:string
}

interface IColumn{
    key:string;
    label:string
}

const CustomTable = ({ columns, data }:{columns:IColumn[],data:IObject[]}) => {

    return (
        <TableContainer component={Paper}>
            <Table sx={classes.table} aria-label="generic table">
                <TableHead>
                    <TableRow>
                        {columns.map((column, index) => (
                            <TableCell key={index}>{column.label}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {columns.map((column, columnIndex) => (
                                <TableCell key={columnIndex}>{row[column.key]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomTable;
