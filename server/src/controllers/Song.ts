/* eslint-disable no-await-in-loop */
import routes from '../routes/public'
import SongService from "../services/SongService";

routes.get('/song',SongService.getAll)
routes.post('/song',SongService.create)
