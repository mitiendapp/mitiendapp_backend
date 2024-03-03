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
exports.UserRepository = void 0;
const models_1 = __importDefault(require("../models"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserRepository {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield models_1.default.User.findAll();
                return users;
            }
            catch (error) {
                throw new Error("Can't fetch all users.");
            }
        });
    }
    findOne(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield models_1.default.User.findOne({ where: { email: email } });
                return user;
            }
            catch (error) {
                throw new Error("Can't find user with email: " + email);
            }
        });
    }
    create(payload, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            let { firstName, lastName, email, roles, password, status } = payload;
            const hashedPassword = yield bcrypt_1.default.hash(password, 10);
            const alreadyExist = yield models_1.default.User.findOne({ where: { email } });
            if (alreadyExist) {
                throw new Error('User already exist');
            }
            try {
                if ("nameEmprendimiento" in payload) {
                    roles = Object.assign({}, { "Company": 4068 });
                }
                ;
                const user = yield models_1.default.User.create({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: hashedPassword,
                    roles: roles,
                    status: status
                });
                return user;
            }
            catch (error) {
                throw new Error("Error creating user (repository)");
            }
        });
    }
    update(email, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const alreadyExist = yield this.findOne(email);
            if (alreadyExist == null) {
                throw new Error('User not found');
            }
            try {
                const newUser = yield models_1.default.User.update(payload, { where: { email } });
                return newUser;
            }
            catch (error) {
                throw new Error("Can't update user");
            }
        });
    }
    delete(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const alreadyExist = yield this.findOne(email);
            if (alreadyExist == null) {
                throw new Error('User not found');
            }
            try {
                const userDeleted = yield models_1.default.User.destroy({ where: { email } });
                return userDeleted;
            }
            catch (error) {
                throw new Error("Can't delete user");
            }
        });
    }
}
exports.UserRepository = UserRepository;
