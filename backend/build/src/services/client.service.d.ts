import { ClientAttributes } from "../models/client";
export declare class ClientService {
    private clientRepository;
    private userRepository;
    constructor();
    create(data: any): Promise<ClientAttributes>;
    get(): Promise<ClientAttributes[]>;
    find(id: any): Promise<ClientAttributes>;
    update(id: any, data: ClientAttributes): Promise<ClientAttributes>;
    delete(id: any): Promise<ClientAttributes>;
}
