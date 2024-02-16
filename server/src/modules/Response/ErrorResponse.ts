import BadRequest from '../Errors/BadRequest'
import NotFound from '../Errors/NotFound'
import Unauthorize from '../Errors/Unauthorize'
import Forbidden from '../Errors/Forbidden'
import InternalServer from '../Errors/InternalServer'

const ErrorResponse = {
    BadRequest,
    Unauthorize,
    NotFound,
    Forbidden,
    InternalServer
}

export default ErrorResponse