import { ClientAttributes } from "../models/client";
import { ClientRepository } from "../repositories/client.repository";
import { UserRepository } from "../repositories/user.repository";

export class ClientService {
    private clientRepository: ClientRepository;
    private userRepository: UserRepository;

    constructor() {
        this.clientRepository = new ClientRepository();
        this.userRepository = new UserRepository()
    }

    async create(data: any): Promise<ClientAttributes> {
        try {
            await this.userRepository.create(data, null); 
            const cli:any = {
                ...data,
                UserId: data.document
            } 
            const client: ClientAttributes = await this.clientRepository.create(cli, null);
            return client;
        } catch (error) { 
            throw error;
        }
    }
    async get(): Promise<ClientAttributes[]> {
        try {
            const clients: ClientAttributes[] = await this.clientRepository.findAll();
            return clients;
        } catch (error) {
            throw error;
        }
    }
    async find(id: any): Promise<ClientAttributes> {
        try {
            const client: ClientAttributes = await this.clientRepository.findOne(id);
            return client;
        } catch (error) {
            throw error;
        }
    }
    async update(id: any, data: ClientAttributes): Promise<ClientAttributes> {
        try {
            const client: ClientAttributes = await this.clientRepository.update(id, data);
            return client;
        } catch (error) {
            throw error;
        }
    }
    async delete(id: any): Promise<ClientAttributes> {
        try {
            const client: ClientAttributes = await this.clientRepository.delete(id);
            await this.userRepository.delete(id);
            return client;
        } catch (error) {
            throw error;
        }
    }
}