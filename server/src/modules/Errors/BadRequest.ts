import BaseResponse from './BaseResponse'

class BadRequest extends BaseResponse {
    constructor(message: string = "BAD_REQUEST") {
        super(message, 400)
        Object.setPrototypeOf(this, BadRequest.prototype)
    }
}

export default BadRequest