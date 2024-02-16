import { Model, FindOptions, CreateOptions, UpdateOptions, DestroyOptions } from 'sequelize';

export interface IRepository<T extends Model> {
    getAll(options?: FindOptions): Promise<T[]>;
    getById(id: number, options?: FindOptions): Promise<T | null>;
    create(data: Record<string, any>, options?: CreateOptions): Promise<T>;
    update(id: number, data: Record<string, any>, options?: UpdateOptions): Promise<T | null>;
    delete(id: number, options?: DestroyOptions): Promise<boolean>;
}