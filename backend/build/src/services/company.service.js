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
exports.CompanyService = void 0;
const company_respository_1 = require("../repositories/company.respository");
class CompanyService {
    constructor() {
        this.CompanyRepository = new company_respository_1.CompanyRepository();
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.CompanyRepository.create(data, null);
                return company;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.CompanyRepository.findAll();
                return company;
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateCompany(document, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.CompanyRepository.update(document, data);
                return company;
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteCompany(document) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.CompanyRepository.delete(document);
                return company;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.CompanyService = CompanyService;
