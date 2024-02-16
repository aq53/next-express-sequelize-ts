import BaseRepository from "./BaseRepository";
import {Model} from "sequelize";

const models = require("../../models");

// @ts-ignore
const { Album } = models;

// @ts-ignore
class AlbumRepository extends BaseRepository<Model>{
    constructor() {
        super(Album);
    }
}

export default AlbumRepository;