import BaseRepository from "./BaseRepository";
import {Model} from "sequelize";

const models = require("../../models");

// @ts-ignore
const { Song } = models;

class SongRepository extends BaseRepository<Model>{
    constructor() {
        super(Song);
    }
}

export default SongRepository;