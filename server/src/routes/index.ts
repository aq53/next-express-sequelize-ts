import {Router, Request, Response, NextFunction} from 'express'
import BuildResponse from '../modules/Response/BuildResponse'
import ErrorResponse from '../modules/Response/ErrorResponse'
import publicRoute from './public'

const router = Router()

/* Home Page. */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
    const buildResponse = BuildResponse.get({
        message: 'Express Sequelize TypeScript',
        code:200
    })
    return res.status(buildResponse.code).send(buildResponse)
})

/* Forbidden Page. */
router.get('/v1', function (req: Request, res: Response, next: NextFunction) {
    throw new ErrorResponse.BadRequest('forbidden, wrong access endpoint')
})

/* Declare Route */
router.use('/v1', publicRoute)

export default router

