"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCompany = exports.updateCompany = exports.getCompanyById = exports.getCompanies = exports.createCompany = void 0;
const company_service_1 = require("../services/company.service");
const createCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const companyService = new company_service_1.CompanyService();
    try {
        const company = yield companyService.create(Object.assign({}, req.body));
        return res.status(201).json({
            message: "Company created succesfully",
            data: company
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});
exports.createCompany = createCompany;
const getCompanies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const companyService = new company_service_1.CompanyService();
    try {
        const companies = yield companyService.get();
        return res.status(201).json({
            companies
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});
exports.getCompanies = getCompanies;
const getCompanyById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    const companyService = new company_service_1.CompanyService();
    try {
        const company = yield companyService.find(email);
        return res.status(200).json({
            company
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});
exports.getCompanyById = getCompanyById;
const updateCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const companyService = new company_service_1.CompanyService();
    try {
        const { email } = req.params;
        console.log(email);
        const updatedCompany = yield companyService.update(email, req.body);
        return res.status(201).json({
            message: "Datos actualizados correctamente",
            data: updatedCompany
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});
exports.updateCompany = updateCompany;
const deleteCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const companyService = new company_service_1.CompanyService();
    try {
        const { email } = req.params;
        const deletetedCompany = yield companyService.delete(email);
        return res.status(201).json({
            message: "Company deleted succesfully",
            status: deletetedCompany
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});
exports.deleteCompany = deleteCompany;
