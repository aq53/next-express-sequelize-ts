import {Request,Response} from "express";
import AlbumRepository from "../repositories/AlbumRepository";
import BadRequest from "../modules/Errors/BadRequest";
import BuildResponse from "../modules/Response/BuildResponse";

class AlbumService {
    public static async getAll(req: Request,res:Response) {
        try{
            const albumRepository = new AlbumRepository()
            // @ts-ignore
            const data = await albumRepository.getAll(req.query)
            let response = BuildResponse.get({ message: "Data has been received", data })
            return res.status(response.code).send(response)

        }catch (err){
            let error= new BadRequest()
            return res.status(error.statusCode).send(error)
        }
    }
}

export default AlbumService