import { CompanyAttributes } from "../models/emprendedores";
import ICompanyRepository from "./interfaces/company.repository.interface";
export declare class CompanyRepository implements ICompanyRepository<CompanyAttributes, string> {
    findAll(): Promise<CompanyAttributes[]>;
    findOne(id: string): Promise<CompanyAttributes>;
    create(payload: any, callback: any): Promise<CompanyAttributes>;
    update(document: string, payload: any): Promise<CompanyAttributes>;
    delete(document: string): Promise<CompanyAttributes>;
}
