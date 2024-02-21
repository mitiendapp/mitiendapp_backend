import { ClientAttributes } from "../models/client";
import IClientRepository from "./interfaces/client.repository.interface";
export declare class ClientRepository implements IClientRepository<ClientAttributes, string> {
    findAll(): Promise<ClientAttributes[]>;
    findOne(id: string): Promise<ClientAttributes>;
    create(payload: any, callback: any): Promise<ClientAttributes>;
    update(id: string, payload: any): Promise<ClientAttributes>;
    delete(id: string): Promise<ClientAttributes>;
}
