import { Router } from "express";
import {createCompany,getCompanyUsers, getCompanies,getCompanyById,updateCompany,updateCompanyImage,deleteCompany} from "../controllers/company.controller"
import multer from 'multer'; // Importa multer

const ROUTER = Router();


const upload = multer({ dest: './uploadsFondo'});


//company

ROUTER.get('/company/users', getCompanyUsers);
ROUTER.get('/companies', getCompanies);
ROUTER.get('/company/:email', getCompanyById);
ROUTER.post('/company/create', createCompany);
ROUTER.post('/company/update/:email', updateCompany);
ROUTER.post('/company/updateImage/:email',upload.single('img'), updateCompanyImage);
ROUTER.post('/company/delete/:email', deleteCompany);



module.exports = ROUTER;
