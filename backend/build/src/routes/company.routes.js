"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const company_controller_1 = require("../controllers/company.controller");
const multer_1 = __importDefault(require("multer")); // Importa multer
const ROUTER = (0, express_1.Router)();
const upload = (0, multer_1.default)({ dest: './uploadsFondo' });
//company
ROUTER.get('/company/users', company_controller_1.getCompanyUsers);
ROUTER.get('/companies', company_controller_1.getCompanies);
ROUTER.get('/company/:email', company_controller_1.getCompanyById);
ROUTER.post('/company/create', company_controller_1.createCompany);
ROUTER.post('/company/update/:email', company_controller_1.updateCompany);
ROUTER.post('/company/updateImage/:email', upload.single('img'), company_controller_1.updateCompanyImage);
ROUTER.post('/company/delete/:email', company_controller_1.deleteCompany);
module.exports = ROUTER;
