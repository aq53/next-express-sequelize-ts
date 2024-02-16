/* eslint-disable no-await-in-loop */
import routes from '../routes/public'
import BuildResponse from '../modules/Response/BuildResponse'
import ErrorResponse from '../modules/Response/ErrorResponse'
import AlbumService from "../services/AlbumService";

routes.get('/album',AlbumService.getAll)
