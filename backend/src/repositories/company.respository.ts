import { CompanyAttributes } from "../models/emprendedores";// tabla de creación
import ICompanyRepository from "./interfaces/company.repository.interface";// interfaces, que son promesas
import db from "../models"; // conexion

export class CompanyRepository implements ICompanyRepository<CompanyAttributes, string>{
    async findAll(): Promise<CompanyAttributes[]> {
        try {
            const company = await db.Company.findAll();
            return company;
        } catch (error) {
            throw new Error("Can't fetch all Companys.");
        }
    }
    async findOne(email: string): Promise<CompanyAttributes> {
        try {
            const company = await db.Company.findOne({where: {email:email}}); 
            return company;
        } catch (error) {
            throw new Error("Can't find company with email: " + email);
        }
    }
    async create(payload: any, callback: any): Promise<CompanyAttributes> {
        
        const alreadyExist = await this.findOne(payload.email);

        if(alreadyExist){
            throw new Error('Company already exist');
        }
        try {
            const company = await db.Company.create(payload);
            return company;
        } catch (error) {
            console.log(error);
            throw new Error("Error creating company (repository)");
           
        }
    }
    async update(email: string, payload: any): Promise<CompanyAttributes> {
        const alreadyExist = await this.findOne(email); 
        if(alreadyExist == null){
            throw new Error('Company not found');
        }
        try {
            const newCompany = await db.Company.update(payload, {where: {email}});
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