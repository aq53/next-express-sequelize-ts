import {Request,Response} from "express";
import SongRepository from "../repositories/SongRepository";
import BadRequest from "../modules/Errors/BadRequest";
import BuildResponse from "../modules/Response/BuildResponse";

class SongService {
    public static async getAll(req: Request,res:Response) {
        try{
            const songRepository = new SongRepository()
            // @ts-ignore
            const data = await songRepository.getAll({where:req.query})
            let response = BuildResponse.get({ message: "Fetch data successfully", data })
            return res.status(response.code).send(response)

        }catch (err){
            let error= new BadRequest()
            return res.status(error.statusCode).send(error)
        }
    }

    public static async create(req: Request,res:Response) {
        try{
            const songRepository = new SongRepository()
            // @ts-ignore
            console.log(req.body)
            const data = await songRepository.create(req.body)
            let response = BuildResponse.created({ message: "Create data successfully", data })
            return res.status(response.code).send(response)

        }catch (err){
            let error= new BadRequest()
            return res.status(error.statusCode).send(error)
        }
    }
}

export default SongService