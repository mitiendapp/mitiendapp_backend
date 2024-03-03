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
const user_repository_1 = require("../repositories/user.repository");
class CompanyService {
    constructor() {
        this.companyRepository = new company_respository_1.CompanyRepository();
        this.userRepository = new user_repository_1.UserRepository();
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.companyRepository.create(data, yield this.userRepository.create(data, null));
                return company;
            }
            catch (error) {
                throw error;
            }
        });
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.companyRepository.findAll();
                return company;
            }
            catch (error) {
                throw error;
            }
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.companyRepository.findOne(id);
                return company;
            }
            catch (error) {
                throw error;
            }
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.companyRepository.update(id, data);
                return company;
            }
            catch (error) {
                throw error;
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.companyRepository.delete(id);
                yield this.userRepository.delete(id);
                return company;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.CompanyService = CompanyService;
