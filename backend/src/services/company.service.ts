import { CompanyAttributes } from "../models/emprenderores";
import { CompanyRepository } from "../repositories/company.repository";

export class CompanyService {
    private CompanyRepository: CompanyRepository;

    constructor(){
        this.CompanyRepository = new CompanyRepository();
    }

    async create(data: any):Promise<CompanyAttributes>{
        try{
            const company:CompanyAttributes = await this.CompanyRepository.create(data, null);
            return company;
        }catch(error){
            throw error;
        }
    }

    async getAll():Promise<CompanyAttributes[]>{
        try{
            const company:CompanyAttributes[] = await this.CompanyRepository.findAll();
            return company;
        }catch(error){
            throw error;
        }
    }

    async updateCompany(document: string ,data: any):Promise<CompanyAttributes>{
        try{
            const company:CompanyAttributes = await this.CompanyRepository.update(document,data);
            return company;
        }catch(error){
            throw error;
        }
    }

    async deleteCompany(document: string ):Promise<CompanyAttributes>{
        try{
            const company:CompanyAttributes = await this.CompanyRepository.delete(document);
            return company;
        }catch(error){
            throw error;
        }
    }


//     async getAll(): Promise<CompanyAttributes[]> {
//         try {
//             const companies: CompanyAttributes[] = await this.CompanyRepository.findAll();
            
  
// return companies;
//         } catch (error) {
//             throw error;
//         }
//     }

    
}