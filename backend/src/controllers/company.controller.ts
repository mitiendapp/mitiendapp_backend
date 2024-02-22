import { NextFunction, Request, RequestHandler} from "express";
import db from "../models";
import { CompanyService } from "../services/company.service";
import { Response } from "express";



export const createCompany: RequestHandler = async (
    req:Request,
    res:Response,
    ) => {
    const companyService = new CompanyService();
    try {
        console.log(req.body);
        
        const company = await companyService.create({...req.body});
        return res.status(201).json(
            {
                message: "Company created succesfully",
                data:company
            }
        )
    } catch (error:any) {
        return res.status(500).json({
            message: error.message
        })
    }
}  


export const getAllCcompany: RequestHandler = async (
    req:Request,
    res:Response,
    ) => {
    const companyService = new CompanyService();
    try {
        
        const company = await companyService.getAll();
        return res.status(201).json(
            {
                message: "Todos los datos llegaron",
                data:company
            }
        )
    } catch (error:any) {
        return res.status(500).json({
            message: error.message
        })
    }
}


// export const updateCompany: RequestHandler = async (
    
//     req:Request,
//     res:Response,

//     ) => {
//     const companyService = new CompanyService();
//     try {
//         const companyId = req.params.document;
//         const company = await companyService.updateCompany(companyId,{...req.body});
//         return res.status(201).json(
//             {
//                 message: "Todos los datos llegaron",
//                 data:company
//             }
//         )
//     } catch (error:any) {
//         return res.status(500).json({
//             message: error.message
//         })
//     }
// }

export const updateCompany: RequestHandler = async (
    req: Request,
    res: Response
) => {
    const companyService = new CompanyService();
    try {
        const companyId = req.params.document;
        const updatedCompany = await companyService.updateCompany(companyId, { ...req.body });
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
        const companyId = req.params.document;
        const updatedCompany = await companyService.deleteCompany(companyId);
        return res.status(201).json({
            message: "Eliminado",
            data: updatedCompany
        });
    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        });
    }
};