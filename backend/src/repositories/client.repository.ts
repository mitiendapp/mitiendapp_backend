import { ClientAttributes } from "../models/client";
import IClientRepository from "./interfaces/client.repository.interface";
import db from "../models";

export class ClientRepository implements IClientRepository<ClientAttributes, string>{
    async findAll(): Promise<ClientAttributes[]> {
        try {
            const clients = await db.Client.findAll();
            return clients;
        } catch (error) {
            throw new Error("Can't fetch all clients.");
        }
    }
    async findOne(id: string): Promise<ClientAttributes> {
        try {
            const client = await db.Client.findByPk(id);   
            return client;
        } catch (error) {
            throw new Error("Can't find client with id: " + id);
        }
    }
    async create(payload: any, callback: any): Promise<ClientAttributes> {
        
        const alreadyExist = await this.findOne(payload.document);

        if(alreadyExist){
            throw new Error('Client already exist');
        }
        try {
            const client = await db.Client.create(payload);
            return client;
        } catch (error) {
            throw new Error("Error creating client (repository)");
        }
    }
    async update(document: string, payload: any): Promise<ClientAttributes> {
        const alreadyExist = await this.findOne(document);
        if(alreadyExist == null){
            throw new Error('Client not found');
        }
        try {
            const newClient = await db.Client.update(payload, {where: {document}});
            return newClient;
        } catch (error) {
            console.log(error);
            throw new Error("Can't update client");
        }
    }
    async delete(document: string): Promise<ClientAttributes> {
        const alreadyExist = await this.findOne(document);
        if(alreadyExist == null){
            throw new Error('Client not found');
        }
        try {
            const clientDeleted = await db.Client.destroy({where: {document}});
            return clientDeleted;
        } catch (error) {
            throw new Error("Can't delete client");
        }
    }

}