import RestClientService from './restClient.service';

export interface ISong{
    title:string;
    albumId:number;
    description:string
}

class SongService extends RestClientService {

    getAllSongs() {
        return this.get('/song');
    }


    getSongsByAlbumId(albumId:number) {
            return this.get(`/song?albumId=${albumId}`);
    }

    create(data:ISong) {
        return this.post('/song',data);
    }
}

export default SongService;
