import { ClientAttributes } from "../models/client";
export declare class ClientService {
    private clientRepository;
    constructor();
    create(data: any): Promise<ClientAttributes>;
    get(): Promise<ClientAttributes[]>;
    find(id: any): Promise<ClientAttributes>;
}
