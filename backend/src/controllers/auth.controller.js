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
exports.loginTest = exports.loginUser = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const models_1 = require("../models");
const bcrypt_1 = require("bcrypt");
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    console.log(email, password);
    if (!email || !password)
        return res.status(400).json({ "message": "Correo y contraseña son requeridos" });
    const user = yield models_1.default.User.findOne({
        where: {
            email: email
        }
    }).catch((err) => {
        console.error(err);
    });
    if (!user) {
        return res.status(404).json({
            message: "Verifique nuevamente el correo o la contraseña"
        });
    }
    const match = yield bcrypt_1.default.compare(password, user.password);
    if (!user || !match) {
        return res.status(401).json({
            message: "Correo o contraseña incorrectos"
        });
    }
    try {
        const userRoles = JSON.parse(user.roles);
        const roles = Object.values(userRoles);
        const accessToken = jsonwebtoken_1.default.sign({
            UserInfo: {
                id: user.id,
                email: user.email,
                roles: roles
            }
        }, "12345", {
            expiresIn: "30d"
        });
        const refreshToken = jsonwebtoken_1.default.sign({
            id: user.id,
            email: user.email
        }, "54321", {
            expiresIn: "1d"
        });
        res.status(200).json({
            message: "Ingreso exitoso",
            token: accessToken
        });
    }
    catch (error) {
        res.status(500).json({
            message: "¡Ups! Algo salió mal"
        });
        next(error);
    }
});
exports.loginUser = loginUser;
const loginTest = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    return res.send("funciona");
});
exports.loginTest = loginTest;
