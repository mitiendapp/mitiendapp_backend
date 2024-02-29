"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const company_controller_1 = require("../controllers/company.controller");
const ROUTER = (0, express_1.Router)();
//company
ROUTER.post('/companyRegister', company_controller_1.createCompany);
ROUTER.get('/getAllCompany', company_controller_1.getAllCcompany);
ROUTER.put('/companyUpdate/:document', company_controller_1.updateCompany);
ROUTER.delete('/companyDelete/:document', company_controller_1.deleteCompany);
module.exports = ROUTER;
