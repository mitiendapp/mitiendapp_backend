import { CompanyAttributes } from "../models/emprendedores";
export declare class CompanyService {
    private CompanyRepository;
    constructor();
    create(data: any): Promise<CompanyAttributes>;
    getAll(): Promise<CompanyAttributes[]>;
    updateCompany(document: string, data: any): Promise<CompanyAttributes>;
    deleteCompany(document: string): Promise<CompanyAttributes>;
}
