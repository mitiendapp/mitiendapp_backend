"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const company_controller_1 = require("../controllers/company.controller");
const ROUTER = (0, express_1.Router)();
//company
ROUTER.get('/companies', company_controller_1.getCompanies);
ROUTER.get('/company/:email', company_controller_1.getCompanyById);
ROUTER.post('/company/create', company_controller_1.createCompany);
ROUTER.post('/company/update/:email', company_controller_1.updateCompany);
ROUTER.post('/company/delete/:email', company_controller_1.deleteCompany);
module.exports = ROUTER;
