import { CompanyAttributes } from "../models/emprendedores";
export declare class CompanyService {
    private companyRepository;
    private userRepository;
    constructor();
    create(data: CompanyAttributes): Promise<CompanyAttributes>;
    get(): Promise<CompanyAttributes[]>;
    find(id: any): Promise<CompanyAttributes>;
    update(id: any, data: any): Promise<CompanyAttributes>;
    delete(id: any): Promise<CompanyAttributes>;
}
