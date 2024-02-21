import { Router } from "express";
import {createCompany,getAllCcompany,updateCompany,deleteCompany} from "../controllers/company.controller"
const ROUTER = Router();




//company

ROUTER.post('/companyRegister', createCompany)
ROUTER.get('/getAllCompany',getAllCcompany)
ROUTER.put('/companyUpdate/:document', updateCompany)
ROUTER.delete('/companyDelete/:document',deleteCompany)

module.exports = ROUTER;