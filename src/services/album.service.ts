import RestClientService from './restClient.service';

class AlbumService extends RestClientService {

    getAllAlbums() {
        return this.get('/album');
    }
}

export default AlbumService;
