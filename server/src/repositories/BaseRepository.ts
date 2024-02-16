import { Model, FindOptions, CreateOptions, UpdateOptions, DestroyOptions } from 'sequelize';

import {IRepository} from "../interfaces/repository.interface";

class BaseRepository<T extends Model> implements IRepository<T> {
    private model: Model<T>;

    constructor(model: Model<T>) {
        this.model = model;
    }

    async getAll(options?: FindOptions): Promise<T[]> {
        // @ts-ignore
        return this.model.findAll(options);
    }

    async getById(id: number, options?: FindOptions): Promise<T | null> {
        // @ts-ignore
        return this.model.findByPk(id, options);
    }

    async create(data: Record<string, any>, options?: CreateOptions): Promise<T> {
        // @ts-ignore
        return this.model.create(data, options);
    }

    async update(id: number, data: Record<string, any>, options?: UpdateOptions): Promise<T | null> {
        // @ts-ignore
        const result = await this.model.update(data, { ...options, where: { id } });
        // @ts-ignore
        if (result[0] === 1) {
            return this.getById(id, options);
        }
        return null;
    }

    async delete(id: number, options?: DestroyOptions): Promise<boolean> {
        // @ts-ignore
        const result = await this.model.destroy({ ...options, where: { id } });
        // @ts-ignore
        return result === 1;
    }
}

export default BaseRepository;