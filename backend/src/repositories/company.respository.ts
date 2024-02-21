import { CompanyAttributes } from "../models/emprendedores";// tabla de creación
import ICompanyRepository from "./interfaces/company.repository.interface";// interfaces, que son promesas
import db from "../models"; // conexion

export class CompanyRepository implements ICompanyRepository<CompanyAttributes, string>{
    async findAll(): Promise<CompanyAttributes[]> {
        try {
            const company = await db.Company.findAll();
            return company;
        } catch (error) {
            throw new Error("Can't fetch all clients.");
        }
    }
    async findOne(id: string): Promise<CompanyAttributes> {
        try {
            const company = await db.Company.findByPk(id);   
            return company;
        } catch (error) {
            throw new Error("Can't find client with id: " + id);
        }
    }
    async create(payload: any, callback: any): Promise<CompanyAttributes> {
        
        const alreadyExist = await this.findOne(payload.document);

        if(alreadyExist){
            throw new Error('Client already exist');
        }
        try {
            const company = await db.Company.create(payload);
            return company;
        } catch (error) {
            console.log(error);
            throw new Error("Error creating client (repository)");
           
        }
    }
    
    
    async update(document: string, payload: any): Promise<CompanyAttributes> {
        const alreadyExist = await this.findOne(document);
        if(alreadyExist == null){
            throw new Error('Client not found');
        }
        try {
            const newCompany = await db.Company.update(payload, {where: {document}});
            return newCompany;
        } catch (error) {
            throw new Error("Can't update client");
        }
    }
    async delete(document: string): Promise<CompanyAttributes> {
        const alreadyExist = await this.findOne(document);
        if(alreadyExist == null){
            throw new Error('Client not found');
        }
        try {
            const companyDeleted = await db.Company.destroy({where: {document}});
            return companyDeleted;
        } catch (error) {
            throw new Error("Can't delete client");
        }
    }

}