import { ClientAttributes } from "../models/client";
import { ClientRepository } from "../repositories/client.repository";

export class ClientService {
    private clientRepository: ClientRepository;

    constructor(){
        this.clientRepository = new ClientRepository();
    }

    async create(data: any):Promise<ClientAttributes>{
        try{
            const client:ClientAttributes = await this.clientRepository.create(data, null);
            return client;
        }catch(error){
            throw error;
        }
    }
}