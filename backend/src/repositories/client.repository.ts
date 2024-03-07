import { ClientAttributes } from "../models/client";
import IClientRepository from "./interfaces/client.repository.interface";
import db from "../models";
import bcrypt from 'bcrypt';

export class ClientRepository implements IClientRepository<ClientAttributes, string>{
    async findAll(): Promise<ClientAttributes[]> {
        try {
            const clients = await db.Client.findAll();
            return clients;
        } catch (error) {
            console.log(error);
            throw new Error("Can't fetch all clients: ");
        }
    }
    async findOne(email: string): Promise<ClientAttributes> {
        try {
            const client = await db.Client.findOne({where:{email}});   
            return client;
        } catch (error) {
            throw new Error("Can't find client with email: " + email);
        }
    }
    async create(payload: any, callback: any): Promise<ClientAttributes> {
        const alreadyExist = await this.findOne(payload.email);
        if(alreadyExist){
            throw new Error('Client already exist');
        }
        try {
            const password = await bcrypt.hash(payload.password, 10);
            payload.password = password;
            const client = await db.Client.create(payload);
            return client;
        } catch (error) {
            throw new Error("Error creating client (repository)");
        }
    }
    async update(email: string, payload: any): Promise<ClientAttributes> {
        const alreadyExist = await this.findOne(email);
        if(alreadyExist == null){
            throw new Error('Client not found');
        }
        try {
            const newClient = await db.Client.update(payload, {where: {email}});
            return newClient;
        } catch (error) {
            throw new Error("Can't update client");
        }
    }
    async delete(email: string): Promise<ClientAttributes> {
        const alreadyExist = await this.findOne(email);
        if(alreadyExist == null){
            throw new Error('Client not found');
        }
        try {
            const clientDeleted = await db.Client.destroy({where: {email}});
            return clientDeleted;
        } catch (error) {
            throw new Error("Can't delete client");
        }
    }

}