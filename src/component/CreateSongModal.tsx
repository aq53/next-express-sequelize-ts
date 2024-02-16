import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CreateSongModal = (
    {
        isOpen,
        handleClose,
        onSubmit
    } : {
    isOpen:boolean,
    handleClose: () => void,
    onSubmit: (formData:any) => void
}) => {
    const formInitialState={
        title: '',
        description: '',
    }
    const [formData, setFormData] = useState(formInitialState);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        onSubmit(formData)
        setFormData(formInitialState)
    };
    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 400 }}>
                        <TextField
                            label="Title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            margin="normal"
                            variant="outlined"
                            required
                        />
                        <TextField
                            label="Description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            multiline
                            rows={4}
                            margin="normal"
                            variant="outlined"
                            required
                        />
                        <div className="flex">
                            <Button onClick={handleClose} sx={{ mt: 2 }}>
                                Close
                            </Button>

                            <Button type="submit" variant="contained" sx={{ mt: 2, color:'black' }}>
                                Submit
                            </Button>
                        </div>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
};

export default CreateSongModal;