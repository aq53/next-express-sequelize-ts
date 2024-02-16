'use client'

import React, {useEffect, useState} from 'react';
import {Button} from '@mui/material';
import CustomTable from "@/component/CustomTable";
import AlbumService from "@/services/album.service";
import CreateSongModal from "@/component/CreateSongModal";
import SongService from "@/services/song.service";
import SongsPopup from "@/component/SongsPopup";

let tableColumns = [{
    key:'id',
    label:'ID'
},{
    key:'name',
    label:'Name'
},{
    key:'createdAt',
    label:'Created At'
},{
    key:'action',
    label:'Action'
}]

const HomeContainer: React.FC = () => {
    const [albums,setAlbums] = useState([])
    const [songs,setSongs] = useState([])
    const [isOpenForm,setIsOpenForm] = useState(false)
    const [isOpenViewPopup,setIsOpenViewPopup] = useState(false)
    const [activeAlbumId,setActiveAlbumId] = useState(0)
    const getAlbums = async ()=>{
        const albumService = new AlbumService()
        const albums: Array<any> = await albumService.getAllAlbums();
        // @ts-ignore
        if(albums?.data?.length){
            // @ts-ignore
            setAlbums(albums.data.map((item:any)=>({
                ...item,
                action: (
                    <div className="flex">
                        <Button
                            sx={{color:"black"}}
                            key={item.id}
                            onClick={openAddSongForm(item.id)}
                            variant="contained"
                        >
                            Add Song
                        </Button>

                        <Button
                            sx={{color:"black"}}
                            key={item.id}
                            onClick={openViewSongsPopup(item.id)}
                            variant="contained"
                        >
                            View Song
                        </Button>
                    </div>)
            })))
        }
    }

    const openAddSongForm = (albumId:number) => ()=> {
        setIsOpenForm(true);
        setActiveAlbumId(albumId)
        console.log(albumId)
    }

    const openViewSongsPopup = (albumId:number) => async ()=> {
        const songService = new SongService();
        const songs = await songService.getSongsByAlbumId(albumId)

        if(songs?.data){
            setSongs(songs.data)
        }
        setIsOpenViewPopup(true);

    }

    const onCloseAddSongForm=()=>{
        setIsOpenForm(false);
        setActiveAlbumId(0);
    }

    const onCloseSongsPopup=()=>{
        setIsOpenViewPopup(false);
        setSongs([]);
    }

    const onAddSong = async (formData:any) => {
        const songService = new SongService();
        await songService.create({...formData,albumId:activeAlbumId})
        setActiveAlbumId(0);
        setIsOpenForm(false)
    }
    useEffect(() => {
        getAlbums();
    }, []);

    return (
        <div style={{width:"80%",margin:'20px auto'}}>

            <h1>Albums</h1>

            <CustomTable columns={tableColumns} data={albums}/>
            <CreateSongModal
                onSubmit={onAddSong}
                isOpen={isOpenForm}
                handleClose={onCloseAddSongForm}
            />
            <SongsPopup isOpen={isOpenViewPopup} handleClose={onCloseSongsPopup} songs={songs}/>
        </div>
    );
};

export default HomeContainer;