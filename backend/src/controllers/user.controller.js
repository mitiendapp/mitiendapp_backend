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
exports.registerUser = void 0;
const models_1 = require("../models");
const bcrypt_1 = require("bcrypt");
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, password, roles, status } = req.body;
    if (!email || !password)
        return res.status(400).json({ "message": "El correo y la contraseña son requeridos" });
    const exists = yield models_1.default.User.findOne({
        where: {
            email: req.body.email
        }
    }).catch((err) => {
        console.error(err);
    });
    if (exists)
        return res.status(409).json({
            message: "El correo ya se encuentra registrado"
        });
    try {
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const user = yield models_1.default.User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
            roles: roles,
            status: status
        }).then(() => {
            return res.status(201).json({
                message: "El usuario fue registrado con exito"
            });
        }).catch((err) => {
            console.error(err);
            next(err);
        });
    }
    catch (error) {
        res.status(500).json({
            message: "¡Ups! Algo salió mal"
        });
        next(error);
    }
});
exports.registerUser = registerUser;
