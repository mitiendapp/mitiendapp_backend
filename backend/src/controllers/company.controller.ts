import { NextFunction, Request, RequestHandler } from "express";
import db from "../models";
import { CompanyService } from "../services/company.service";
import { Response } from "express";



export const createCompany: RequestHandler = async (
    req: Request,
    res: Response,
) => {
    const companyService = new CompanyService();
    try {
        const company = await companyService.create({ ...req.body });
        return res.status(201).json(
            {
                message: "Company created succesfully",
                data: company
            }
        )
    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }
}
export const getCompanies: RequestHandler = async (
    req: Request,
    res: Response,
) => {
    const companyService = new CompanyService();
    try {

        const companies = await companyService.get();
        return res.status(201).json(
            {
                companies
            }
        )
    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }
} 
export const getCompanyById: RequestHandler = async (
    req: Request,
    res: Response
) => {
    const { email } = req.params;
    const companyService = new CompanyService();
    try {
        const company = await companyService.find(email);
        return res.status(200).json({
            company
        })
    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }
}
export const updateCompany: RequestHandler = async (
    req: Request,
    res: Response
) => {
    const companyService = new CompanyService();
    try {
        const {email} = req.query;
        console.log(email);
        
        const updatedCompany = await companyService.update(email, req.body );
        return res.status(201).json({
            message: "Datos actualizados correctamente",
            data: updatedCompany
        });
    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        });
    }
};


export const deleteCompany: RequestHandler = async (
    req: Request,
    res: Response
) => {
    const companyService = new CompanyService();
    try {
        const {email} = req.params;
        const deletetedCompany = await companyService.delete(email);
        return res.status(201).json({
            message: "Company deleted succesfully",
            status: deletetedCompany
        });
    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        });
    }
};
