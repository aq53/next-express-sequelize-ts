import React, {useEffect, useState} from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CustomTable from "@/component/CustomTable";


let tableColumns = [{
    key:'id',
    label:'ID'
},{
    key:'title',
    label:'Title'
}, {
    key:'description',
    label:'Description'
}, {
    key:'albumId',
    label:'Album ID'
}, {
    key:'createdAt',
    label:'Created At'
}]

const SongsPopup = (
    {
        isOpen,
        handleClose,
        songs
    } : {
        songs:Array<any>,
        isOpen:boolean,
        handleClose: () => void,
    }) => {

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 800, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                <CustomTable columns={tableColumns} data={songs}/>
            </Box>
        </Modal>
    );
};

export default SongsPopup;