import { CompanyAttributes } from "../models/emprendedores";// tabla de creación
import ICompanyRepository from "./interfaces/company.repository.interface";// interfaces, que son promesas
import db from "../models"; // conexion
import bcrypt from 'bcrypt';

export class CompanyRepository implements ICompanyRepository<CompanyAttributes, string>{
    async findAll(): Promise<CompanyAttributes[]> {
        try {
            const company = await db.Company.findAll();
            return company;
        } catch (error) {
            throw new Error("Can't fetch all Companys.");
        }
    }
    async findOne(companyId: any): Promise<CompanyAttributes> {
        try {
            const company = await db.Company.findOne({where: {companyId:companyId}}); 
            return company;
        } catch (error) {
            throw new Error("Can't find company with companyId: " + companyId);
        }
    }
    async create(payload: any, callback: any): Promise<CompanyAttributes> {
        
        const alreadyExist = await this.findOne(payload.email);

        if(alreadyExist){
            throw new Error('Company already exist');
        }
        try {
            // const password = await bcrypt.hash(payload.password, 10);
            // payload.password = password;
            const company = await db.Company.create(payload);
            return company;
        } catch (error) {
            throw new Error("Error creating company (repository)");          
        }
    }
    async update(companyId: any, payload: any): Promise<CompanyAttributes> {
        const alreadyExist = await this.findOne(companyId); 
        if(alreadyExist == null){
            throw new Error('Company not found');
        }
        try {
            const newCompany = await db.Company.update(payload, {where: {companyId}});
            return newCompany;
        } catch (error) {
            throw new Error("Can't update company");
        }
    }
    async delete(email: string): Promise<CompanyAttributes> {
        const alreadyExist = await this.findOne(email);
        if(alreadyExist == null){
            throw new Error('Company not found');
        }
        try {
            const companyDeleted = await db.Company.destroy({where: {email}});
            return companyDeleted;
        } catch (error) {
            throw new Error("Can't delete company");
        }
    }

}