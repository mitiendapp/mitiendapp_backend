import { CompanyAttributes } from "../models/emprendedores";
import ICompanyRepository from "./interfaces/company.repository.interface";
export declare class CompanyRepository implements ICompanyRepository<CompanyAttributes, string> {
    findAll(): Promise<CompanyAttributes[]>;
    findOne(email: string): Promise<CompanyAttributes>;
    create(payload: any, callback: any): Promise<CompanyAttributes>;
    update(email: string, payload: any): Promise<CompanyAttributes>;
    delete(email: string): Promise<CompanyAttributes>;
}
