import { Router } from "express";
import {createCompany,getCompanies,getCompanyById,updateCompany,deleteCompany} from "../controllers/company.controller"
const ROUTER = Router();




//company


ROUTER.get('/companies', getCompanies);
ROUTER.get('/company/:companyId', getCompanyById);
ROUTER.post('/company/create', createCompany);
ROUTER.post('/company/update', updateCompany);
ROUTER.post('/company/delete/:email', deleteCompany);



module.exports = ROUTER;
