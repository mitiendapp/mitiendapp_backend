import { CompanyAttributes } from "../models/company";
import { CompanyRepository } from "../repositories/company.respository";
import { UserRepository } from "../repositories/user.repository";

export class CompanyService {
    private companyRepository: CompanyRepository;
    private userRepository: UserRepository;

    constructor() {
        this.companyRepository = new CompanyRepository();
        this.userRepository = new UserRepository();
    }

    async create(data: CompanyAttributes): Promise<CompanyAttributes> {
        try {
            await this.userRepository.create(data, null)
            const comp: any = {
                ...data,
                UserId: data.document
            }
            const company: CompanyAttributes = await this.companyRepository.create(comp, null);
            return company;
        } catch (error) {
            throw error;
        }
    }

    async get(): Promise<CompanyAttributes[]> {
        try {
            const company: CompanyAttributes[] = await this.companyRepository.findAll();
            return company;
        } catch (error) {
            throw error;
        }
    }
    async find(id: any): Promise<CompanyAttributes> {
        try {
            const company: CompanyAttributes = await this.companyRepository.findOne(id);
            return company;
        } catch (error) {
            throw error;
        }
    }
    async update(id: any, data: any): Promise<CompanyAttributes> {
        try {
            const company: CompanyAttributes = await this.companyRepository.update(id, data);
            return company;
        } catch (error) {
            throw error;
        }
    }
    async delete(id: any): Promise<CompanyAttributes> {
        try {
            const company: CompanyAttributes = await this.companyRepository.delete(id);
            await this.userRepository.delete(id);
            return company;
        } catch (error) {
            throw error;
        }
    }
    async getCompanyUsers(): Promise<CompanyAttributes> {
        try {
            const companies: any = await this.companyRepository.findAllUsers();
            return companies
        } catch (error) {
            throw error;
        }
    }
}