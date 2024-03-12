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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyRepository = void 0;
const models_1 = __importDefault(require("../models")); // conexion
class CompanyRepository {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield models_1.default.Company.findAll();
                return company;
            }
            catch (error) {
                throw new Error("Can't fetch all Companys.");
            }
        });
    }
    findOne(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield models_1.default.Company.findOne({ where: { email: email } });
                return company;
            }
            catch (error) {
                throw new Error("Can't find company with email: " + email);
            }
        });
    }
    create(payload, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const alreadyExist = yield this.findOne(payload.email);
            if (alreadyExist) {
                throw new Error('Company already exist');
            }
            try {
                const company = yield models_1.default.Company.create(payload);
                return company;
            }
            catch (error) {
                console.error(error);
                throw new Error(`Error creating company (repository) ${error}`);
            }
        });
    }
    update(email, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const alreadyExist = yield this.findOne(email);
            if (alreadyExist == null) {
                throw new Error('Company not found');
            }
            try {
                const newCompany = yield models_1.default.Company.update(payload, { where: { email } });
                return newCompany;
            }
            catch (error) {
                throw new Error("Can't update company");
            }
        });
    }
    delete(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const alreadyExist = yield this.findOne(email);
            if (alreadyExist == null) {
                throw new Error('Company not found');
            }
            try {
                const companyDeleted = yield models_1.default.Company.destroy({ where: { email } });
                return companyDeleted;
            }
            catch (error) {
                throw new Error("Can't delete company");
            }
        });
    }
}
exports.CompanyRepository = CompanyRepository;
