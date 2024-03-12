import { Router } from "express";
import {createCompany,getCompanies,getCompanyById,updateCompany,deleteCompany} from "../controllers/company.controller"
const ROUTER = Router();




//company


ROUTER.get('/companies', getCompanies);
ROUTER.get('/company/:email', getCompanyById);
ROUTER.post('/company/create', createCompany);
ROUTER.post('/company/update/:email', updateCompany);
ROUTER.post('/company/delete/:email', deleteCompany);



module.exports = ROUTER;
